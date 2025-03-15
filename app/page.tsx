import LanguageSelector from "@/app/_components/ui/language/LanguageSelector";
import {getTranslations} from "next-intl/server";
import AuthComponent from "@/app/_components/AuthComponent";
import ThemeSelector from "@/app/_components/ui/theme/ThemeSelector";
import TodosComponent from "@/app/_components/TodosComponent";

export default async function Home() {
  const t = await getTranslations("Homepage");

  return <div className="p-4 space-y-3">
    <div className="flex items-center gap-2">
      <ThemeSelector />
      <LanguageSelector />
    </div>
    <div>
      <h1>{t("title")}</h1>
    </div>
    <AuthComponent />
    <TodosComponent />
  </div>
}
