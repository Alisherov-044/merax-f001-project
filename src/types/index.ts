import { ComponentProps, ReactNode } from "react";

export type IconProps = ComponentProps<"svg">;

export type ButtonProps = {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
    icon?: ReactNode;
};

export type TNavLink = {
    id: number;
    link: string;
    title: string;
    children?: TNavLink[];
};
