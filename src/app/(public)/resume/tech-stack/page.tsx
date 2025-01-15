import { Resume } from "@/shared/types/resume";
import { fetchResumeData } from "../page";
import { TechStack } from "@/pages/resume/ui/tech-stack";

export default async function Page() {
  const resume: Resume = await fetchResumeData();

  return (
    <div>
      <TechStack data={resume.techStack} />
    </div>
  );
}
