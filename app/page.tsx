import LanguageSelector from "@/app/_components/ui/LanguageSelector/LanguageSelector";
import ClientComponent from "@/app/_components/ClientComponent";
import {getTranslations} from "next-intl/server";
import {createClient} from "@/utils/supabase/server";
import AuthComponent from "@/app/_components/AuthComponent";

export default async function Home() {
  const supabase = await createClient();
  const {data} = await supabase.from("Test").select("*");

  const t = await getTranslations("Homepage");
  return <div>
    <h1>{t("title")}</h1>
    <LanguageSelector/>
    <ClientComponent />
    <AuthComponent />
  </div>
}
