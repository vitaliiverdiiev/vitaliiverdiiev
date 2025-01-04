"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "../../../shared/config/i18n/routing";
import { Button, ButtonGroup } from "@nextui-org/react";

type Props = {
  isSelected: boolean;
  locale: string;
  changeLocale: (locale: string) => void;
};

export const LocaleButton: React.FC<Props> = ({
  isSelected,
  locale,
  changeLocale,
}) => {
  return (
    <Button
      variant={isSelected ? "solid" : "ghost"}
      onPress={() => changeLocale("en")}
      isIconOnly
    >
      {locale}
    </Button>
  );
};

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (locale: string) => {
    router.push(`/${locale}${pathname}`);
    router.refresh();
  };
  
  return (
    <ButtonGroup>
      <LocaleButton
        changeLocale={() => handleChange("en")}
        isSelected={locale === "en"}
        locale="EN"
      />
      <LocaleButton
        changeLocale={() => handleChange("ua")}
        isSelected={locale === "ua"}
        locale="UA"
      />
    </ButtonGroup>
  );
};
