import OffersUpper from "@/app/_components/home/offers/OffersUpper";
import OffersDown from "@/app/_components/home/offers/OffersDown";

export default function Offers() {
    return <section id="offers" className="mt-12 w-[95%] max-w-[60rem] mx-auto space-y-10">
        <OffersUpper />
        <OffersDown />
    </section>
}