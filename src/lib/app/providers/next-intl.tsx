import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const NextIntlProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {

  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
