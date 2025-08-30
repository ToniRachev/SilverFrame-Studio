import clsx from "clsx";

interface SectionContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionContainer({ children, className }: Readonly<SectionContainerProps>) {
    return (
        <div className={clsx("max-w-[95vw] mx-auto", className)}>
            {children}
        </div>
    )
}