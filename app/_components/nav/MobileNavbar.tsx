"use client"

import Image from "next/image";
import {IoClose, IoMenuOutline} from "react-icons/io5";
import {NAVLINKS} from "@/app/config/config";
import Link from "next/link";
import {useState} from "react";

export default function MobileNavbar() {
    const [opened, setOpened] = useState(false);

    return <>
        <div className="block md:hidden mr-4 justify-self-end">
            <IoMenuOutline onClick={() => setOpened(true)} className="cursor-pointer text-4xl hover:text-accent transition-all duration-200"/>
        </div>
        <div
            style={{transform: `translateX(${opened ? 0 : 100}%)`}}
            className="fixed top-0 right-0 bottom-0 w-[75vw] bg-white rounded-tl-lg mobile-nav-shadow rounded-bl-lg z-20 px-4 py-2 transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
                <div className="relative w-[4rem] aspect-square">
                    <Image src="/logo.svg" alt="Мебели ВаМ" fill/>
                </div>
                <IoClose onClick={() => setOpened(false)} className="cursor-pointer text-[1.6rem] text-secondary hover:text-accent transition-all duration-200"/>
            </div>
            <hr/>
            <ul className="flex flex-col gap-4 mt-4">
                {NAVLINKS.map((link, index) => {
                    return <li key={index}><Link onClick={() => setOpened(false)} scroll href={link.href}
                                                 className="text-text hover:text-accent transition-all duration-200">{link.label}</Link>
                    </li>
                })}
            </ul>
        </div>
    </>
}