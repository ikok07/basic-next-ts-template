"use client"

import PrimaryInput from "@/app/_components/ui/PrimaryInput";
import {useEffect, useState} from "react";
import PrimaryButton from "@/app/_components/ui/PrimaryButton";
import PrimaryCheckbox from "@/app/_components/ui/PrimaryCheckbox";
import Link from "next/link";

export default function ContactForm() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [checkmarkChecked, setCheckmarkChecked] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);

    useEffect(() => {
        setButtonActive(name.length > 0 && phone.length > 0 && city.length > 0 && checkmarkChecked);
    }, [name, phone, city, checkmarkChecked]);

    return <div className="md:w-[90%] mt-6">
        <div className="space-y-3">
            <PrimaryInput value={name} setValue={(v) => setName(v)} placeholder="Име" />
            <PrimaryInput value={phone} setValue={(v) => setPhone(v)} placeholder="Телефон" type="tel" />
            <PrimaryInput value={city} setValue={(v) => setCity(v)} placeholder="Град" />
        </div>
        <PrimaryCheckbox
            label={
                <small>
                    Съгласявам се с <Link className="text-accent" href="/privacy">политиката за поверителност</Link>
                </small>
            }
            checked={checkmarkChecked}
            onChange={() => setCheckmarkChecked(v => !v)}
            className="mt-3"
        />
        <PrimaryButton disabled={!buttonActive} className="mt-10 w-max text-[1rem]">Изпращане</PrimaryButton>
    </div>
}