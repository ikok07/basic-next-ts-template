import SectionHeading from "@/app/_components/ui/SectionHeading";
import Image from "next/image";

export default function OffersUpper() {
    return <div className="grid md:grid-cols-[2fr_1fr] gap-5">
        <div className="">
            <SectionHeading label="Оферти" title="Ето какво предлагаме"/>
            <p className="mt-3">След като ни изпратите запитване, ще се свържем с вас в рамките на 1 работен ден, за да
                уточним подробности по проекта. След това ще изготвим вашата оферта в рамките на 2 до 7 работни дни в
                зависимост от обема на заданието.</p>
        </div>
        <div className="relative w-full aspect-video">
            <Image src="/offers/offers-img.png" alt="Оферти" fill className="object-cover rounded-xl"/>
        </div>
    </div>
}