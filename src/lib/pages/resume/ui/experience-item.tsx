import { Experience } from "@/shared/types/resume";

type Props = {
  data: Experience;
};

export const ExperienceItem: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div>
        <span>{data.position}</span> at <span>{data.company}</span>{" "}
        <span>({data.companyType})</span> - <span>{data.location}</span>
      </div>
      <div>
        <span>
          {data.dateStart} - {data.dateEnd}
        </span>{" "}
        <span>({data.period})</span> - <span>{data.positionType}</span>
      </div>

      <ul>
        {data.achievements.map((ach) => (
          <li key={ach}>{ach}</li>
        ))}
      </ul>
    </div>
  );
};
