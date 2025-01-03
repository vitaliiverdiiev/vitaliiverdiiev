import { useTranslations } from "next-intl";
import { ExperienceItem } from "./experience-item";

export const Experience = () => {
  const t = useTranslations("Home");

  return (
    <div className="grid grid-cols-3 gap-6 bg-[#333333] rounded-[10px]">
      <ExperienceItem title="5+" description={t("achievements.experience")} />
      <ExperienceItem title="17+" description={t("achievements.projects")} />
      <ExperienceItem title="100%" description={t("achievements.dedication")} />
    </div>
  );
};
