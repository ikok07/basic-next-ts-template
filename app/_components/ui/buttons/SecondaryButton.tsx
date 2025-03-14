import {Button} from "@/app/_components/ui/shadcn/button";
import {ComponentProps} from "react";

type SecondaryButtonProps = {} & ComponentProps<"button">

export default function SecondaryButton({children, onClick, disabled, className, ...props}: SecondaryButtonProps) {
    return <div>
        <Button variant="outline" className={`${className} px-3`} onClick={disabled ? () => {} : onClick} {...props}>
            {children}
        </Button>
    </div>
}