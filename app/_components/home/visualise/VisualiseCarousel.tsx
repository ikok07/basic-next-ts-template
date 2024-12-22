"use client"

import {VISUALISE_COMPARISONS} from "@/app/config/config";
import VisualiseBeforeAfter from "@/app/_components/home/visualise/VisualiseBeforeAfter";
import {IoChevronBack, IoChevronForward} from "react-icons/io5";
import {useState} from "react";

export default function VisualiseCarousel() {
    const [offset, setOffset] = useState(0);

    function handleClick(direction: "left" | "right") {
        if ((direction === "left" && offset + 100 > 0) || (direction === "right" && offset - 100 < -(VISUALISE_COMPARISONS.length - 1) * 100)) return;
        setOffset(v => direction === "left" ? v + 100 : v - 100);
    }

    return <div className="rounded-xl mt-12">
        <div className="overflow-hidden">
            <div className="flex transition-all duration-200" style={{transform: `translateX(${offset}%`}}>
                {VISUALISE_COMPARISONS.map((comp, index) => {
                    return <VisualiseBeforeAfter key={index} {...comp}/>
                })}
            </div>
            <div className="w-full grid place-content-center mt-7">
                <div className="flex text-4xl gap-x-8">
                    <IoChevronBack
                        onClick={() => handleClick("left")}
                        style={{opacity: offset === 0 ? 0.4 : 0.8}}
                        className="cursor-pointer rounded-full bg-accent text-white pr-1 transition-all duration-200"/>
                    <IoChevronForward
                        onClick={() => handleClick("right")}
                        style={{opacity: offset > -(VISUALISE_COMPARISONS.length - 1) * 100 ? 0.8 : 0.4}}
                        className="cursor-pointer rounded-full bg-accent text-white pl-1 transition-all duration-200"/>
                </div>
            </div>
        </div>
    </div>
}