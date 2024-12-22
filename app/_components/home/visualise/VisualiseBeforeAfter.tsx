"use client"

import {ImgComparisonSlider} from "@img-comparison-slider/react";

type VisualiseBeforeAfterProps = {
    before: string,
    after: string
}

export default function VisualiseBeforeAfter({before, after}: VisualiseBeforeAfterProps) {
    return <ImgComparisonSlider className="rounded-xl flex-scroll w-full aspect-video outline-none">
        <img slot="first" src={before} className="w-full h-full object-cover"/>
        <img slot="second" src={after}  className="w-full h-full object-cover object-center"/>
    </ImgComparisonSlider>
}