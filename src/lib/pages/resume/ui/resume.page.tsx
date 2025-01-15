import { Language, Resume } from "@/shared/types/resume";
import { GeneralInfoItem } from "./general-info-item";

type Props = {
  data: Resume;
};

export const ResumePage: React.FC<Props> = ({ data: resume }) => {
  return (
    <section className="p-6 space-y-10">
      <div className="flex gap-1 items-center">
        <h2>{resume.generalInfo.name + " " + resume.generalInfo.name},</h2>
        <h2>{resume.generalInfo.position}</h2>
      </div>

      <div className="columns-3">
        <GeneralInfoItem label="location" value={resume.generalInfo.location} />
        <GeneralInfoItem
          label="phone"
          value={resume.generalInfo.phone}
          renderValue={(value: string) => (
            <a href={`tel:${value}`} target="_blank">
              {value}
            </a>
          )}
        />
        <GeneralInfoItem
          label="languages"
          value={resume.generalInfo.languages}
          renderValue={(languages: Language[]) => (
            <div className="flex gap-1">
              {languages.map((lang) => (
                <span key={lang.language}>
                  <span>{lang.language}</span>
                  <span className="text-gray-500"> ({lang.proficency})</span>
                </span>
              ))}
            </div>
          )}
        />
        <GeneralInfoItem
          label="Email"
          value={resume.generalInfo.email}
          renderValue={(value: string) => (
            <a href={`mailto:${value}`} target="_blank">
              {value}
            </a>
          )}
        />
        <GeneralInfoItem
          label="github"
          value={resume.generalInfo.github}
          renderValue={(value: string) => (
            <a href={value} target="_blank">
              vitaliiverdiiev
            </a>
          )}
        />
        <br />
        <GeneralInfoItem
          label="telegram"
          value={resume.generalInfo.telegram}
          renderValue={(value: string) => (
            <a href={value} target="_blank">
              ukrainiancustomer
            </a>
          )}
        />
        <GeneralInfoItem
          label="linkedin"
          value={resume.generalInfo.linkedin}
          renderValue={(value: string) => (
            <a href={value} target="_blank">
              vitaliiverdiiev
            </a>
          )}
        />
      </div>

      <div>
        <span>Summary:</span> <span>{resume.summary}</span>
      </div>






    </section>
  );
};
