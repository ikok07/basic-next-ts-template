import SectionHeading from "@/app/_components/ui/SectionHeading";
import WorkRow from "@/app/_components/home/work/WorkRow";

export default function Work() {
    return <section id="work" className="mt-12">
        <SectionHeading label="КАК РАБОТИМ" title="Разкриваме процеса на изработка" />
        <div>
            <WorkRow
                index={1}
                title="Вземане на размери"
                text="Веднага щом се отдаде възможност, нашият екип ще пристигне на място, за да вземе размерите възможно най-бързо и прецизно, гарантирайки минимално забавяне и максимално удобство за Вас."
                img="/work/work-1.png"
            />
            <WorkRow
                index={2}
                title="Дизайн и визуализация"
                text="Изграждаме професионален дизайн и фотореалистична визуализация, за да видите предварително дали проектът отговаря на Вашите предпочитания, преди да преминем към изработката и монтажа."
                img="/work/work-2.png"
                reverse={true}
            />
            <WorkRow
                index={3}
                title="Монтаж"
                text="Осигуряваме професионален монтаж, за да получите завършен и прецизно изпълнен интериор, без да губите време или усилия."
                img="/work/work-3.png"
            />
        </div>
    </section>
}