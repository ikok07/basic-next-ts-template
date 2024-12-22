"use client"

import Image from "next/image";
import {IoChevronBack, IoChevronForward} from "react-icons/io5";
import {useState} from "react";

export default function HeroCarousel() {
    const imgCount = 2;
    const [offset, setOffset] = useState(0);

    function handleClick(direction: "left" | "right") {
        if ((direction === "left" && offset + 100 > 0) || (direction === "right" && offset - 100 < -(imgCount - 1) * 100)) return;
        setOffset(v => direction === "left" ? v + 100 : v - 100);
    }
    return <div className="absolute w-[100vw] h-max overflow-hidden">
        <div className="flex transition-all duration-200" style={{transform: `translateX(${offset}%`}}>
            <div className="flex-scroll relative w-[100vw] h-[80vh]">
                <Image src="/hero/hero-1.png" alt="Мебели Вам" fill className="object-cover"/>
            </div>
            <div className="flex-scroll relative w-[100vw] h-[80vh]">
                <Image src="/hero/hero-2.png" alt="Мебели Вам" fill className="object-cover"/>
            </div>
        </div>
        <div className="absolute bottom-5 w-full grid place-content-center">
            <div className="flex text-4xl gap-x-8">
                <IoChevronBack
                    onClick={() => handleClick("left")}
                    style={{opacity: offset === 0 ? 0.4 : 0.8}}
                    className="cursor-pointer rounded-full bg-accent text-white pr-1 transition-all duration-200"/>
                <IoChevronForward
                    onClick={() => handleClick("right")}
                    style={{opacity: offset > -(imgCount - 1) * 100 ? 0.8 : 0.4}}
                    className="cursor-pointer rounded-full bg-accent text-white pl-1 transition-all duration-200"/>
            </div>
        </div>
    </div>
}