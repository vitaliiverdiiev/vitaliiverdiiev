import { resume, TechStackItem } from "../page";

export default function Page() {
  return (
    <div id="techstack-items" className="mt-10">
      <h2 className="text-2xl font-bold mb-5">Tech stack</h2>
      {Object.entries(resume.techStack.frontend).map(([key, value]) => {
        return <TechStackItem key={key} title={key} stack={value} />;
      })}
      {Object.entries(resume.techStack.backend).map(([key, value]) => {
        return <TechStackItem key={key} title={key} stack={value} />;
      })}
      {Object.entries(resume.techStack.general).map(([key, value]) => {
        return <TechStackItem key={key} title={key} stack={value} />;
      })}
    </div>
  );
}
