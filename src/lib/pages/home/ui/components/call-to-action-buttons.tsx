'use client';

import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/react";

export const CallToActionButtons = () => {
  const t = useTranslations("Actions");

  return (
    <div className="flex items-center gap-5 mb-[80px]">
      <Button>{t("hire-me")}</Button>
      <Button variant="ghost">{t("download-resume")}</Button>
    </div>
  );
};
