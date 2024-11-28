import LanguageSelector from "@/app/_components/ui/LanguageSelector/LanguageSelector";
import {useTranslations} from "next-intl";
import ClientComponent from "@/app/_components/ClientComponent";

export default function Home() {
  const t = useTranslations("Homepage");
  return <div>
    <h1>{t("title")}</h1>
    <LanguageSelector/>
    <ClientComponent />
  </div>
}
