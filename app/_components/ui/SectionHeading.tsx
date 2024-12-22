type SectionHeadingProps = {
    label: string
    title: string,
}

export default function SectionHeading({label, title}: SectionHeadingProps) {
    return <div>
        <h6 className="text-accent uppercase">{label}</h6>
        <h1 className="text-3xl font-bold">{title}</h1>
    </div>
}