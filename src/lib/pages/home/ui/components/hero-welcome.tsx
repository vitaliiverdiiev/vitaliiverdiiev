import { useTranslations } from "next-intl";

export const HeroWelcome = () => {
  const t = useTranslations("Home");

  return (
    <div>
      <p className="text-[24px] leading-[29px] mb-[10px] font-semibold">
        {t("greeting")}
      </p>
      <p className="text-[28px] leading-[34px] mb-[24px] font-bold">
        {t("name")}
      </p>
      <h1 className="text-[70px] leading-[84px] mb-[17px] font-black">
        {t("position")}
      </h1>
    </div>
  );
};
