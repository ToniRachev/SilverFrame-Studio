import clsx from "clsx";

interface ServiceProps {
    title: string;
    setActiveService: (e: React.MouseEvent<HTMLLIElement>) => void;
    active: boolean;
}


export default function Service({ title, setActiveService, active }: Readonly<ServiceProps>) {
    return (
        <li
            className={clsx("border-b border-stone-200 first:border-t w-full py-6 cursor-default relative mix-blend-difference", active ? 'z-20 border-t' : 'z-1')}
            onMouseEnter={setActiveService}
        >
            <h1>{title}</h1>
        </li>
    )
}