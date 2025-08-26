import Image from "next/image";

interface DirectorImageProps {
    imageUrl: string;
}

export default function DirectorImage({ imageUrl }: Readonly<DirectorImageProps>) {

    return (
        <li className="w-[25vw] h-full relative">
            <Image src={imageUrl} alt={imageUrl} fill className="object-cover w-full h-full" />
        </li>
    )
}