/*
 * When a self-guided challenge's day 1 email goes out: 6:00 in the
 * subscriber's own time zone, written the way Sender reads it.
 *
 * Sender reads a date field as wall-clock time in the ACCOUNT's time zone
 * (tested 25 Nov 2026: Thailand). If the time zone in Sender's settings
 * ever changes, change SENDER_TIME_ZONE to match.
 */

export const SENDER_TIME_ZONE = "Asia/Bangkok";

// Used when the browser didn't send a usable time zone (most readers are in Israel).
const FALLBACK_TIME_ZONE = "Asia/Jerusalem";

const DAY_ONE_HOUR = 6;

// Signing up after about 3am, "tomorrow morning" means the next day's 6:00;
// before that (say 1am), it's the 6:00 a few hours later.
const MIN_HOURS_BEFORE_DAY_ONE = 3;

export function isTimeZone(value: string): boolean {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: value });
    return true;
  } catch {
    return false;
  }
}

// The moment of day 1, as "YYYY-MM-DD HH:MM:SS" in Sender's time zone.
export function dayOneForSender(visitorTimeZone: string, now = new Date()): string {
  const zone = isTimeZone(visitorTimeZone) ? visitorTimeZone : FALLBACK_TIME_ZONE;
  const today = partsIn(now, zone);

  for (let addDays = 0; addDays <= 2; addDays++) {
    const moment = atLocalTime(today.year, today.month, today.day + addDays, DAY_ONE_HOUR, zone);
    if (moment.getTime() - now.getTime() >= MIN_HOURS_BEFORE_DAY_ONE * 3600_000) {
      return format(partsIn(moment, SENDER_TIME_ZONE));
    }
  }
  throw new Error("unreachable: a 6:00 is always within two days");
}

type Parts = { year: number; month: number; day: number; hour: number; minute: number; second: number };

// The wall-clock date and time of a moment in a time zone.
function partsIn(date: Date, timeZone: string): Parts {
  const values = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
      .formatToParts(date)
      .filter((part) => part.type !== "literal")
      .map((part) => [part.type, Number(part.value)]),
  );
  return values as Parts;
}

// The moment when the clock in `timeZone` shows this date and hour
// (day may overflow the month: Date.UTC rolls it over).
function atLocalTime(year: number, month: number, day: number, hour: number, timeZone: string): Date {
  const asIfUtc = Date.UTC(year, month - 1, day, hour);
  let guess = asIfUtc - offset(new Date(asIfUtc), timeZone);
  guess = asIfUtc - offset(new Date(guess), timeZone); // again, in case daylight saving changes in between
  return new Date(guess);
}

// How far ahead of UTC the time zone's clock is at that moment, in ms.
function offset(date: Date, timeZone: string): number {
  const p = partsIn(date, timeZone);
  return Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second) - Math.floor(date.getTime() / 1000) * 1000;
}

function format(p: Parts): string {
  const two = (n: number) => String(n).padStart(2, "0");
  return `${p.year}-${two(p.month)}-${two(p.day)} ${two(p.hour)}:${two(p.minute)}:${two(p.second)}`;
}
