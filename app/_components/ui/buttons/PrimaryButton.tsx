import {Button} from "@/app/_components/ui/shadcn/button";
import {ComponentProps} from "react";

type PrimaryButtonProps = {} & ComponentProps<"button">

export default function PrimaryButton({children, onClick, disabled, className, ...props}: PrimaryButtonProps) {
    return <Button
        className={`${className} h-max py-1.5 px-3 bg-gradient-to-b from-gray-600 to-gray-800 hover:from-gray-500 hover:to-gray-700 dark:from-gray-500 dark:to-gray-700 dark:text-white dark:hover:from-gray-400 dark:hover:to-gray-600 !duration-300`}
        onClick={disabled ? () => {} : onClick}
        disabled={disabled}
        {...props}
    >
        {children}
    </Button>
}