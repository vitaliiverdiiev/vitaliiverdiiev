import { Resume } from "@/shared/types/resume";
import { fetchResumeData } from "../page";
import { EducationItem } from "@/pages/resume/ui/education-item";

export default async function Page() {
  const resume: Resume = await fetchResumeData();

  return (
    <div>
      <h2>Education:</h2>
      <div className="space-y-4">
        {resume.education.map((educ) => (
          <EducationItem key={educ.dates} data={educ} />
        ))}
      </div>
    </div>
  );
}
