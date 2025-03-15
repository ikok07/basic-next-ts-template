import {Button} from "@/app/_components/ui/shadcn/button";
import {ComponentProps} from "react";
import Link from "next/link";
import {Loader2} from "lucide-react";

type SecondaryButtonProps = {
    href?: string,
    loading?: boolean
} & ComponentProps<"button">

export default function SecondaryButton({children, href, onClick, disabled, loading, className, ...props}: SecondaryButtonProps) {
    const inactiveBackground = "cursor-not-allowed opacity-50";

    const button = <Button
        variant="secondary"
        className={`${className} ${loading || disabled ? inactiveBackground : ""} h-max py-1.5 px-3`}
        onClick={disabled || loading ? () => {} : onClick}
        {...props}
    >
        {loading && <Loader2 className="animate-spin"/>}
        {children}
    </Button>

    if (href) return <Link href={href}>{button}</Link>

    return button;
}