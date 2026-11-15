import Link from "next/link";

const navBarItems = [
    {
        id: 1,
        title: "Inicio",
        href: "/",
        animation: "fade-right",
        duration: 200,
    },
    {
        id: 2,
        title: "Acerca de mí",
        href: "/about",
        animation: "fade-left",
        duration: 300,
    },
    {
        id: 3,
        title: "Estudios",
        href: "/education",
        animation: "fade-right",
        duration: 400,
    },
    {
        id: 4,
        title: "Proyectos",
        href: "/projects",
        animation: "fade-left",
        duration: 500,
    },
]

export default navBarItems;