"use server";

import { createTranslator } from "next-intl";
import { getLocale } from "next-intl/server";

let messages: Record<string, any> = {};

export const getTranslation = async (
  namespace: string,
  key: string
): Promise<string> => {
  const locale = await getLocale() ?? "en";

  if (Object.keys(messages).length === 0) {
    messages = (await import(`../messages/${locale}.json`)).default;
  }
  const t = createTranslator({ locale, messages, namespace });
  return t(key);
};
