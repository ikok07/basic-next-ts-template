import Image from "next/image";

type WorkRowProps = {
    index: number,
    title: string,
    text: string,
    img: string,
    reverse?: boolean
}

export default function WorkRow({index, title, text, img, reverse}: WorkRowProps) {
    return <div className={`flex ${reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"} gap-y-20 items-center md:items-start mt-10`}>
        <div className="mt-5 flex-1">
            <label className="text-6xl text-secondary/30 font-bold">{`${index}`.padStart(2, '0')}</label>
            <h2 className="text-2xl font-bold mt-3">{title}</h2>
            <p className="mt-1 text-secondary/70">{text}</p>
        </div>
        <div className="relative w-[95%] xs:w-[25rem] aspect-square md:flex-1">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/20 w-full xs:w-[25rem] aspect-square rounded-full"/>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/20 w-[85%] xs:w-[20rem] aspect-square rounded-full"/>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[12rem] h-[22rem] xs:w-[15rem] xs:h-[25rem]">
                <Image src={img} alt={title} fill className="object-cover rounded-xl"/>
            </div>
        </div>
    </div>
}