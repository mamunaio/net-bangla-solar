import { redirect } from "next/navigation";

// /solutions page is hidden per user request; redirect to home page
export default function SolutionsPage() {
  redirect("/");
}
