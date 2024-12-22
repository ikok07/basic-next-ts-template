import {ReactNode} from "react";

type PrimaryCheckboxProps = {
    checked: boolean,
    onChange: () => void,
    label: ReactNode,
    className?: string
}

export default function PrimaryCheckbox({checked, onChange, label, className}: PrimaryCheckboxProps) {
    return <div className={`flex sm:ml-0 items-center gap-2 text-text ${className}`}>
        <input type="checkbox" className="bg-input-gradient" checked={checked} onChange={onChange}/>
        <label className={`text-lg`}>{label}</label>
    </div>
}