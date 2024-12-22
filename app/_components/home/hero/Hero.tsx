import HeroCarousel from "@/app/_components/home/hero/HeroCarousel";
import SecondaryServerButton from "@/app/_components/ui/SecondaryServerButton";

export default function Hero() {
    return <div className="relative">
        <HeroCarousel />
        <div className="relative pt-24 w-[95%] max-w-[60rem] mx-auto">
            <div className="mt-10">
                <h3 className="bg-accent w-max px-3 py-2 rounded-lg text-white uppercase text-sm md:text-xl">100% Качество</h3>
                <h1 className="text-white text-4xl md:text-5xl font-black uppercase mt-4">Мебели ВаМ по поръчка</h1>
                <p className="text-white md:text-lg max-w-[40rem] mt-4">"Мебели ВаМ" изработва по поръчка корпусна мебел, която може да обзаведе хотели, офиси, кухни, дневни, спални, детски стаи и други помещения.</p>
                <SecondaryServerButton className="w-max mt-6" href="#offers">Виж актуални оферти</SecondaryServerButton>
            </div>
        </div>
    </div>
}