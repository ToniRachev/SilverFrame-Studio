import clsx from "clsx";

interface TitleProps {
    text: string;
    className?: string;
}

const Title = ({ text, className }: Readonly<TitleProps>) => {
    return (
        <h1 className={clsx("max-w-[15ch] !text-[8em] !m-0", className)}>{text}</h1>
    )
}

export default function DirectorsContent() {
    return (
        <div className="mt-4">
            <Title text="The Storytellers" />
            <Title text="Behind the Lens" className="text-decor" />
        </div>
    )
}