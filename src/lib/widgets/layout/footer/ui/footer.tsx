import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="h-[80px]">
      <div className="container flex items-center justify-center">
        <p>
          {t('copy')}
        </p>
      </div>
    </footer>
  );
};
