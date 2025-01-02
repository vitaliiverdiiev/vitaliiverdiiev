"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "../../../../i18n/routing";
import { Button } from "@nextui-org/react";

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
  console.log({ locale });
  return (
    <div className="flex items-center justify-center gap-4">
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
    </div>
  );
};
