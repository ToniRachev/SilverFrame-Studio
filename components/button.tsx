import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    className?: string;
}

const buttonVariants = cva("bg-white text-black px-4 py-2 rounded-md font-bold transition-all duration-300 cursor-pointer", {
    variants: {
        variant: {
            default: "hover:bg-stone-700 hover:text-white",
        }
    }
})

export default function Button({ children, variant = "default", className, ...props }: Readonly<ButtonProps>) {
    return (
        <button className={clsx(buttonVariants({ variant }), className)} {...props}>
            {children}
        </button>
    )
}