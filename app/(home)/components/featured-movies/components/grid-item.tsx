import Image from "next/image";

interface GridItemProps {
    index: number;
    imageUrl: string;
    setGridWrappersRefs: (el: HTMLDivElement, index: number) => void;
}

const indexToSkip = [1, 5, 7, 9, 12, 18, 21]

export default function GridItem({ index, imageUrl, setGridWrappersRefs }: Readonly<GridItemProps>) {
    if (indexToSkip.includes(index)) {
        return (
            <div key={index} className="w-full h-[calc(100vh/3)]" />
        )
    }

    return (
        <div key={index} className="w-full h-full" ref={el => setGridWrappersRefs(el!, index)}>
            <Image src={imageUrl} alt="movie" width={400} height={500} className="w-full h-[calc(100vh/3)] object-cover" />
        </div>
    )
}