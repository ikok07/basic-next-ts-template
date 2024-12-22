import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {getLocale, getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import AppStoreProvider from "@/app/_providers/AppStoreProvider";
import AppQueryClientProvider from "@/app/_providers/AppQueryClientProvider";
import Navbar from "@/app/_components/nav/Navbar";
import UiProvider from "@/app/_providers/UIProvider";

export const metadata: Metadata = {
  title: "Мебели ВаМ ЕООД",
  description: "\"Мебели ВаМ\" изработва по поръчка корпусна мебел, която може да обзаведе хотели, офиси, кухни, дневни, спални, детски стаи и други помещения.",
};

type LayoutProps = {
    children: ReactNode
}

export default async function RootLayout({
  children,
}: Readonly<LayoutProps>) {
    const locale = await getLocale()
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <NextIntlClientProvider messages={messages}>
            <AppStoreProvider>
                <AppQueryClientProvider>
                        <body>
                            <UiProvider>
                                <Navbar/>
                                {children}
                            </UiProvider>
                        </body>
                </AppQueryClientProvider>
            </AppStoreProvider>
        </NextIntlClientProvider>
        </html>
    );
}
