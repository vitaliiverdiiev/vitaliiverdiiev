import { ExperienceItem } from "@/pages/resume/ui/experience-item";
import { fetchResumeData } from "../page";
import { Resume } from "@/shared/types/resume";

export default async function Page() {
  const resume: Resume = await fetchResumeData();

  return (
    <div>
      <h2>Experience:</h2>
      <div className="space-y-4">
        {resume.experience.map((exp) => (
          <ExperienceItem key={exp.dateStart} data={exp} />
        ))}
      </div>
    </div>
  );
}
