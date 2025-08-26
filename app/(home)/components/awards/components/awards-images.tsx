import Image from "next/image";
import { AwardInterface } from "../lib/types";
import clsx from "clsx";

interface AwardImagesProps {
    awards: AwardInterface[];
    activeAward: AwardInterface;
}

export default function AwardImages({ awards, activeAward }: Readonly<AwardImagesProps>) {
    return (
        <div className="flex-2/3">
            <div className="relative">
                {awards.map((award) => (
                    <div
                        key={award.category}
                        className={clsx('absolute inset-0 h-[70vh] transition-opacity ease-in-out duration-300', award.category === activeAward.category ? 'opacity-100' : 'opacity-0')}
                    >
                        <Image src={award.imageUrl} alt="Award 1" fill className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}