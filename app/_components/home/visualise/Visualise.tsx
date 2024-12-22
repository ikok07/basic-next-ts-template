import SectionHeading from "@/app/_components/ui/SectionHeading";
import VisualiseCarousel from "@/app/_components/home/visualise/VisualiseCarousel";

export default function Visualise() {
    return <section id="visualise" className="bg-accent/20 py-12 mt-10">
        <div className="w-[95%] max-w-[60rem] mx-auto">
            <SectionHeading
                label="Визуализация срещу реалност"
                title="Как изглежда една кухня, проектирана на компютър, в сравнение с реалността..."
            />
            <VisualiseCarousel />
        </div>
    </section>
}