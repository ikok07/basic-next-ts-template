import LanguageSelector from "@/app/_components/ui/language/LanguageSelector";
import {getTranslations} from "next-intl/server";
import AuthComponent from "@/app/_components/AuthComponent";
import {getUser} from "@/app/_utils/actions/auth";
import ThemeSelector from "@/app/_components/ui/theme/ThemeSelector";

export default async function Home() {
  const t = await getTranslations("Homepage");

  return <div className="p-4 space-y-3">
    <ThemeSelector />
    <div>
      <h1>{t("title")}</h1>
      <LanguageSelector/>
    </div>
    <AuthComponent />
  </div>
}
