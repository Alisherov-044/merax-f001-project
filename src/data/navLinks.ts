import { TNavLink } from "@/types";

export const navLinks: TNavLink[] = [
    {
        id: 1,
        link: "#",
        title: "Shops",
    },
    {
        id: 2,
        link: "#",
        title: "Offers",
    },
    {
        id: 3,
        link: "#",
        title: "Contact",
    },
    {
        id: 4,
        link: "#",
        title: "Pages",
        children: [
            {
                id: 1,
                link: "#",
                title: "Flash Sale",
            },
            {
                id: 1,
                link: "#",
                title: "Flash Sale",
            },
            {
                id: 1,
                link: "#",
                title: "Flash Sale",
            },
            {
                id: 1,
                link: "#",
                title: "Flash Sale",
            },
            {
                id: 1,
                link: "#",
                title: "Flash Sale",
            },
        ],
    },
];
