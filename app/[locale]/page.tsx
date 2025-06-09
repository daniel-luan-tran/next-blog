// import { useTranslations } from "next-intl";
// import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

// import { getTranslation } from "@/i18n/getTranslation";

export default async function Home() {
  // const t = useTranslations("Common");
  const t = await getTranslations("Common");

  return (
    <div>
      <h1>{t("hello_world")}</h1>
    </div>
  );
}
