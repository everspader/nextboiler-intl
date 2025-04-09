import { redirect } from "next/navigation";

export default function RootPage() {
  // Try to detect user's preferred language from browser
  // This is a server component, so we can't use navigator.language
  // Instead, we'll just redirect to the default locale
  redirect("/en");
}
