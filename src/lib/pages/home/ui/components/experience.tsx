import { useTranslations } from "next-intl";
import { ExperienceItem } from "./experience-item";
import { Divider } from "@nextui-org/react";
import { cn } from "@/shared/utils";

export const Experience = () => {
  const t = useTranslations("Home");

  return (
    <div
      className={cn(
        "grid grid-cols-[180px_auto_200px] max-w-fit gap-6",
        "bg-background-card rounded-[10px]"
      )}
    >
      <ExperienceItem title="5+" description={t("achievements.experience")} />
      <Divider orientation="vertical" />
      <ExperienceItem title="17+" description={t("achievements.projects")} />
    </div>
  );
};
