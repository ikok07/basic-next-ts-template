export type SupportedLanguage = "en" | "bg";

export const SUPPORTED_LANGS: SupportedLanguage[] = ["en", "bg"];

export const NAVLINKS: {label: string, href: string}[] = [
    {
        label: "Начало",
        href: "/#home"
    },
    {
        label: "Как работим",
        href: "/#work"
    },
    {
        label: "Визуализация срещу реалност",
        href: "/#visualise"
    },
    {
        label: "Оферти",
        href: "/#offers"
    },
]

export const VISUALISE_COMPARISONS: {before: string, after: string}[] = [
    {
        before: "/visualise/visualise-1.png",
        after: "/visualise/visualise-2.png",
    },
    {
        before: "/visualise/visualise-1.png",
        after: "/visualise/visualise-2.png",
    }
]