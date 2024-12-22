"use client"

import {ComponentProps, ReactNode} from "react";
import {Spinner} from "@nextui-org/react";

type PrimaryButtonProps = {
    className?: string,
    spinnerColor?: "secondary" | "white",
    loading?: boolean,
    children: ReactNode,
} & ComponentProps<"button">

export default function PrimaryButton({className, spinnerColor, loading, onClick, disabled, children, ...props}: PrimaryButtonProps) {

    return <button {...props} disabled={disabled} onClick={disabled ? () => {} : onClick} className={`${className} ${loading || disabled ? "cursor-not-allowed bg-secondary/40" : ""} text-sm md:text-md bg-accent text-white flex items-center justify-center px-4 w-full h-9 rounded-lg hover:opacity-90 transition-all duration-200`}>
        {loading ? <Spinner color={spinnerColor ?? "secondary"} size="sm"/> : children}
    </button>
}