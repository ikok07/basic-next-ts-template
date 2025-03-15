import {Button} from "@/app/_components/ui/shadcn/button";
import {ComponentProps} from "react";
import Link from "next/link";
import {Loader2} from "lucide-react";

type PrimaryButtonProps = {
    href?: string,
    loading?: boolean,
    loadingText?: string
} & ComponentProps<"button">

export default function PrimaryButton({children, href, onClick, disabled, loading, loadingText, className, ...props}: PrimaryButtonProps) {
    const defaultGradient = "from-purple-500 to-cta hover:from-purple-600 hover:to-cta dark:from-purple-600 dark:to-cta dark:text-white dark:hover:from-purple-500 dark:hover:to-cta";
    const inactiveGradient = "cursor-not-allowed from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 dark:text-white dark:hover:from-gray-400 dark:hover:to-gray-600";

    const button = <Button
        className={`${className} ${loading || disabled ? inactiveGradient : defaultGradient} py-1.5 px-3 bg-gradient-to-b  !duration-300`}
        onClick={disabled || loading ? () => {} : onClick}
        disabled={disabled}
        {...props}
    >
        {loading && <Loader2 className="animate-spin"/>}
        {loading && loadingText ? loadingText : children}
    </Button>

    if (href) return <Link href={href}>{button}</Link>

    return button
}