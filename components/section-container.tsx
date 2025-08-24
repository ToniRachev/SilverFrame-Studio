import clsx from "clsx";

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionContainer({ children, className }: Readonly<SectionContainerProps>) {
    return (
        <div className={clsx("max-w-[1850px] mx-auto", className)}>
            {children}
        </div>
    )
}