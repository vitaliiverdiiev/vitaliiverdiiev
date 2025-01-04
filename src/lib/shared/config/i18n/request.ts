import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as UnknowType)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === "en"
        ? import("./messages/en.json")
        : import(`./messages/${locale}.json`))
    ).default,
  };
});
