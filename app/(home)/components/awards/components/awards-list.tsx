import clsx from "clsx";
import { AwardInterface } from "../lib/types";

interface AwardsListProps {
    awards: AwardInterface[];
    setActiveAward: (award: AwardInterface) => void;
    activeAward: AwardInterface;
}

export default function AwardsList({ awards, setActiveAward, activeAward }: Readonly<AwardsListProps>) {
    return (
        <ul className="flex-1/3 space-y-24 pt-12">
            {awards.map((award) => (
                <li
                    key={award.category}
                    onMouseEnter={() => setActiveAward(award)}
                    className="relative"
                >
                    <p className="font-bold uppercase">({award.category})</p>
                    <p>{award.festival}</p>

                    <span className={clsx('absolute w-full h-[1px] bg-zinc-300 transition-all duration-300 origin-left', activeAward.category === award.category ? "scale-x-100" : "scale-x-0")} />
                </li>
            ))}
        </ul>
    )
}