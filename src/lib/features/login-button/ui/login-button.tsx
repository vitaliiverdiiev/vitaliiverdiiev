"use client";

import { useTranslations } from "next-intl";
import { Button } from "@nextui-org/react";

export const LoginButton = () => {
  const t = useTranslations("Actions");

  return <Button>{t("login")}</Button>;
};
