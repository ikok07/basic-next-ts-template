import {Spinner} from "@nextui-org/spinner";
import {ComponentProps, ReactNode} from "react";

type PrimaryServerButtonProps = {
    className?: string,
    loading?: boolean,
    disabled?: boolean,
    children: ReactNode
} & ComponentProps<"a">

export default function PrimaryServerButton({className, loading, disabled, children, ...props}: PrimaryServerButtonProps) {
    return <a {...props} className={`${disabled ? "pointer-events-none" : ""} cursor-pointer text-center`}>
        <div
            className={`${className} ${loading || disabled ? "bg-secondary/40" : ""} bg-accent text-white px-4 py-2 w-full rounded-lg hover:opacity-90 transition-all duration-200`}>
            {loading ? <Spinner color="secondary"/> : <div className="cursor-pointer">{children}</div>}
        </div>
    </a>
}