import { clsx } from "clsx";
import { ButtonProps } from "@/types";

export function Button({
    children,
    className,
    icon,
    variant = "primary",
}: ButtonProps) {
    return (
        <button
            className={clsx(
                "rounded-md h-9 px-3 flex items-center justify-center",
                className,
                variant === "primary" && "bg-primary text-white",
                variant === "secondary" && "bg-gray-300"
            )}
        >
            {icon}
            {children}
        </button>
    );
}
