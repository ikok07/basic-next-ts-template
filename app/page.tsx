import LanguageSelector from "@/app/_components/ui/LanguageSelector/LanguageSelector";
import {getTranslations} from "next-intl/server";
import AuthComponent from "@/app/_components/AuthComponent";
import {getUser} from "@/app/_utils/actions/auth";

export default async function Home() {
  const t = await getTranslations("Homepage");

  return <div>
    <h1>{t("title")}</h1>
    <LanguageSelector/>
    <AuthComponent />
  </div>
}
