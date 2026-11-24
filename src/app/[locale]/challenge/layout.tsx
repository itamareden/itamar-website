import { notFound } from "next/navigation";
import { getLocale } from "@/i18n/get-locale";

// The challenge is Hebrew only for now (see hebrewOnlyPaths in i18n/config):
// /en/challenge and every page under it show "not found".
export default async function ChallengeLayout({ children }: { children: React.ReactNode }) {
  if ((await getLocale()) !== "he") notFound();
  return children;
}
