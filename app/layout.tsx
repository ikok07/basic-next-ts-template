import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {getLocale, getMessages} from "next-intl/server";
import {NextIntlClientProvider} from "next-intl";
import AppStoreProvider from "@/app/_providers/AppStoreProvider";
import AppQueryClientProvider from "@/app/_providers/AppQueryClientProvider";
import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
                        {children}
                        <ToastContainer />
                    </body>
                </AppQueryClientProvider>
            </AppStoreProvider>
        </NextIntlClientProvider>
        </html>
    );
}
