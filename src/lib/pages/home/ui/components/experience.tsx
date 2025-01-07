import { useTranslations } from "next-intl";
import { ExperienceItem } from "./experience-item";
import { cn } from "@/shared/utils";

export const Experience = () => {
  const t = useTranslations("Home");

  return (
    <div
      className={cn(
        "grid grid-cols-[1fr_1fr_1fr] max-w-fit gap-6",
        "bg-background-card rounded-xl "
      )}
    >
      <ExperienceItem title="5+" description={t("achievements.experience")} />
      {/* <Divider orientation="vertical" /> */}
      <ExperienceItem title="17+" description={t("achievements.projects")} />
      {/* <Divider orientation="vertical" /> */}
      <ExperienceItem title="50+" description={t("achievements.technologies")} />
    </div>
  );
};
