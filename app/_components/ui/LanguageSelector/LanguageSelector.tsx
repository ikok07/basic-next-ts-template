"use client"

import Cookies from "js-cookie"
import {SUPPORTED_LANGS, SupportedLanguage} from "@/app/config/config";
import {useRouter} from "next/navigation";

export default function LanguageSelector() {
    const router = useRouter();
    function handleSelectLanguage(lang: SupportedLanguage) {
        Cookies.set("NEXT_INTL", lang);
        router.refresh();
    }

    return <div className="flex gap-4">
        {SUPPORTED_LANGS.map((lang, index) => {
            return <button onClick={handleSelectLanguage.bind(null, lang)} key={index}>{lang}</button>
        })}
    </div>
}