import { ResumePage } from "@/pages/resume/ui/resume.page";
import { Resume } from "@/shared/types/resume";
import { cache } from "react";

export const fetchResumeData = cache(async () => {
  "use server";
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/resume`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch resume data");
  }

  return res.json();
});

export default async function Page() {
  const resumeData: Resume = await fetchResumeData();

  return <ResumePage data={resumeData} />;
}
