"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "../../../shared/config/i18n/routing";

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
    <ul className="flex items-center justify-center gap-4">
      <li
        className={
          "hover:underline underline-offset-2" +
          `${locale === "en" ? "text-red-500" : ""}`
        }
        onClick={() => handleChange("en")}
      >
        EN
      </li>
      <li
        className={
          "hover:underline underline-offset-2" +
          `${locale === "ua" ? "text-red-500" : ""}`
        }
        onClick={() => handleChange("ua")}
      >
        UA
      </li>
    </ul>
    // <select
    //   defaultValue={locale}
    //   onChange={handleChange}
    //   className={
    //     "border border-gray-300 font-medium focus:outline-none focus-visible:ring"
    //   }
    //   aria-label="lang-switcher"
    // >
    //   {routing.locales.map((elt) => (
    //     <option key={elt} value={elt}>
    //       {elt.toUpperCase()}
    //     </option>
    //   ))}
    // </select>
  );
};
