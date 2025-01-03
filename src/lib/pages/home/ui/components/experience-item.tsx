type Props = {
  title: string;
  description: string;
};

export const ExperienceItem: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex flex-col p-6">
      <span className={"text-[24px] leading-[29px] mb-3 font-extrabold"}>
        {title}
      </span>
      <span className={"text-[24px] leading-[29px] font-bold text-brand-dark"}>
        {description}
      </span>
    </div>
  );
};
