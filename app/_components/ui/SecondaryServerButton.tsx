import {Spinner} from "@nextui-org/spinner";
import {ComponentProps, ReactNode} from "react";

type SecondaryServerButtonProps = {
    className?: string,
    loading?: boolean,
    disabled?: boolean,
    children: ReactNode
} & ComponentProps<"a">

export default function SecondaryServerButton({className, loading, disabled, children, ...props}: SecondaryServerButtonProps) {
    return <a {...props} className={`${disabled ? "pointer-events-none" : ""} cursor-pointer text-center`}>
        <div
            className={`${className} border-2 ${loading || disabled ? "border-white/50 text-white/50" : "border-white text-white hover:bg-white hover:text-text"} bg-transparent px-4 py-2 w-full rounded-lg transition-all duration-200`}>
            {loading ? <Spinner color="secondary"/> : <div className="cursor-pointer">{children}</div>}
        </div>
    </a>
}