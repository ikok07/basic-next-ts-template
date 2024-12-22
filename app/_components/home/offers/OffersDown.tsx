import SecondaryServerButton from "@/app/_components/ui/SecondaryServerButton";
import ContactForm from "@/app/_components/home/offers/ContactForm";

export default function OffersDown() {
    return <div className="grid md:grid-cols-[1.65fr_1fr] gap-12">
        <div>
            <h4 className="font-bold text-lg">Моля, изпратете ни запитването си чрез формата:</h4>
            <ContactForm />
        </div>
        <div className="bg-accent p-5 text-white rounded-xl">
            <h4 className="text-2xl font-bold">Имате нужда от помощ при попълване на запитването?</h4>
            <p className="mt-2 mb-10">Тук сме, за да ви помогнем. Просто ни се обадете и ще отговорим на въпросите
                ви.</p>
            <SecondaryServerButton href="tel:+359888133513">+359 88 813 3513</SecondaryServerButton>
        </div>
    </div>
}