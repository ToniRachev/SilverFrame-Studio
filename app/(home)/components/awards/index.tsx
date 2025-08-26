'use client';

import SectionContainer from "@/components/section-container";
import AwardsHeading from "./components/awards-heading";
import AwardImages from "./components/awards-images";
import AwardsList from "./components/awards-list";
import { AwardInterface } from "./lib/types";
import { useState } from "react";

const awards = [
    {
        category: "Best Director",
        festival: "Berlin International Film Festival",
        year: 2024,
        imageUrl: "/home/awards/director-award.jpg",
    }, {
        category: "Best Cinematography",
        festival: "Venice Film Festival",
        year: 2024,
        imageUrl: "/home/awards/cinematography-award.jpg",
    }, {
        category: "Crictics' Choice",
        festival: "Cannes Film Festival",
        year: 2022,
        imageUrl: "/home/awards/critics-choice-award.jpg",
    }, {
        category: "Emergin Studio of the Year",
        festival: "Global Indie Film Awards",
        year: 2021,
        imageUrl: "/home/awards/studio-award.jpg",
    }
]

export default function Awards() {
    const [activeAward, setActiveAward] = useState<AwardInterface>(awards[0]);

    return (
        <SectionContainer className="mt-[20vh]">
            <AwardsHeading />

            <div className="w-full flex justify-between h-[70vh] gap-24 mt-4">
                <AwardImages awards={awards} activeAward={activeAward} />
                <AwardsList
                    awards={awards}
                    setActiveAward={(award: AwardInterface) => setActiveAward(award)}
                    activeAward={activeAward}
                />
            </div>
        </SectionContainer>
    )
}