"use client"

import Cookies from "js-cookie"
import {SUPPORTED_LANGS, SupportedLanguage} from "@/app/_config/config";
import {useRouter} from "next/navigation";
import SecondaryButton from "@/app/_components/ui/buttons/SecondaryButton";

export default function LanguageSelector() {
    const router = useRouter();
    function handleSelectLanguage(lang: SupportedLanguage) {
        Cookies.set("NEXT_INTL", lang);
        router.refresh();
    }

    return <div className="flex gap-4">
        {SUPPORTED_LANGS.map((lang, index) => {
            return <SecondaryButton onClick={handleSelectLanguage.bind(null, lang)} key={index}>{lang}</SecondaryButton>
        })}
    </div>
}