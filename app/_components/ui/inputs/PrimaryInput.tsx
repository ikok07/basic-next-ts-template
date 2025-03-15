"use client"

import {ComponentProps} from "react";
import {Input} from "@/app/_components/ui/shadcn/input";
import {Label} from "@/app/_components/ui/shadcn/label";

type PrimaryInputProps = {
    label?: string,
    error?: string
} & ComponentProps<typeof Input>

export default function PrimaryInput({label, error, className, ...props}: PrimaryInputProps) {
    return <div className={`${error ? "text-red-500" : ""}`}>
        <div className="mb-0.5">{label && <Label>{label}</Label>}</div>
        <Input
            className={`${className} ${error ? "border-red-500 focus-visible:ring-transparent" : "focus-visible:ring-cta"} `}
            {...props}
        />
        {error && <small className="pl-1">{error}</small>}
    </div>
}