import { Education } from "@/shared/types/resume";

type Props = {
  data: Education;
};

export const EducationItem: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div>
        <span>{data.title}</span> - <span>{data.almamater}</span>
      </div>
      <div>
        <span>{data.dates}</span> - <span>{data.location}</span>
      </div>
    </div>
  );
};
