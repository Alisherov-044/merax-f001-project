import { ComponentProps, ReactNode } from "react";

export type IconProps = ComponentProps<"svg">;

export type ButtonProps = {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
    icon?: ReactNode;
    onClick?: () => void;
};

export type TNavLink = {
    id: number;
    link: string;
    title: string;
    children?: TNavLink[];
};

export type SearchInputProps = {
    placeholder: string;
    onSubmit: (query: string) => void;
}

export type TProduct = {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    discount?: number;
    images: string[];
}

export type CardProps = {
    product: TProduct;
}

export type ProductsSectionProps = {
    products: TProduct[]
}