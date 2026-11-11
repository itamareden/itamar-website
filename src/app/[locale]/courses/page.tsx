import { redirect } from "next/navigation";
import { courses } from "@/content/courses";
import { getLocale } from "@/i18n/get-locale";

/*
 * While there is only one course, /courses opens it directly. A temporary
 * redirect (307), so search engines keep /courses for the list it will
 * become once a second course arrives.
 */
export default async function CoursesPage() {
  const locale = await getLocale();
  redirect(`/${locale}/courses/${courses[0].slug}`);
}
