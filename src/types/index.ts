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
    category_id: number;
    price: number;
    discount?: number;
    images: string[];
}

export type TCategory = {
    id: number;
    name: string;
    slug: string;
    icon: string;
}

export type TCartProduct = TProduct & {
    qty: number;
}

export type CardProps = {
    product: TProduct;
}

export type MiniCardProps = {
    product: TCartProduct
}

export type ProductsSectionProps = {
    products: TProduct[]
}

export type TStateSlice = {
    isCartOpen: boolean
}

export type DrawerProps = {
    isOpen: boolean
    children: ReactNode
    onClose: () => void
}

export type QtyControllerProps = {
    qty: number
    increment: () => void
    decrement: () => void
    variant?: "primary" | "secondary"
}