"use client";

import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/react";
import { DownloadResume } from "@/features/download-resume/ui/download-resume";

export const CallToActionButtons = () => {
  const t = useTranslations("Actions");

  return (
    <div className="flex items-center gap-5 mb-[80px]">
      <DownloadResume
        label={t("download-resume")}
        downloadName="Vitalii_Verdiiev_Front-end_Developer.pdf"
        link="documents/Vitalii_Verdiiev_Front-end_Developer.pdf"
      />
      <Button variant="light" isDisabled>
        {t("lets-talk")}
      </Button>
    </div>
  );
};
