"use client"

import {ReactNode, useRef} from "react";
import {Provider} from "react-redux";
import {AppStore, makeStore} from "@/app/_store/store";

type AppStoreProviderProps = {
    children: ReactNode
}

export default function AppStoreProvider({children}: AppStoreProviderProps) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>
        {children}
    </Provider>
}