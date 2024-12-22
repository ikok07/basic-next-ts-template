"use client"

import {ReactNode} from "react";
import {NextUIProvider} from "@nextui-org/react";

type UiProviderProps = {
    children: ReactNode
}

export default function UiProvider({children}: UiProviderProps) {
    return <NextUIProvider>{children}</NextUIProvider>
}