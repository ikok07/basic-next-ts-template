import {ComponentProps, useState} from "react";

type PrimaryInputProps = {
    className?: string,
    inputClassName?: string,
    error?: string,
    setValue: (val: string) => void
} & ComponentProps<"input">

export default function PrimaryInput({setValue, className, inputClassName, error, ...props}: PrimaryInputProps) {
    const [focused, setFocused] = useState(false);

    function focus() {
        setFocused(true);
    }

    function unfocus() {
        setFocused(false);
    }

    return <div className={`${className} ${error ? "border-red-400" : ""} ${focused ? "border-accent/80" : "border-secondary/20"}  px-3 flex items-center gap-2 border rounded-md transition-all duration-200`}>
        <input onFocus={focus} onBlur={unfocus} onChange={(e) => setValue(e.target.value)} {...props}
               className={`${inputClassName} bg-transparent py-2 w-full`}/>
    </div>
}