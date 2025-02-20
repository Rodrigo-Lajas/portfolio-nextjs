"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

const skillsArray = [
    { id: 1, name: "HTML", link: "https://www.html.com/", logo: "images/html-5-svgrepo-com.svg" },
    { id: 2, name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", logo: "images/css-3-svgrepo-com.svg" },
    { id: 3, name: "JavaScript", link: "https://www.javascript.com/", logo: "images/javascript-logo-svgrepo-com.svg" },
    { id: 4, name: "React", link: "https://reactjs.org/", logo: "images/react-svgrepo-com.svg" },
    { id: 5, name: "Bootstrap", link: "https://getbootstrap.com/", logo: "images/bootstrap-svgrepo-com.svg" },
    { id: 6, name: "Tailwind", link: "https://tailwindcss.com/", logo: "images/tailwind-svgrepo-com.svg" },
    { id: 7, name: "Material UI", link: "https://mui.com/", logo: "images/material-ui-svgrepo-com.svg" },
]

export default function Page() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <section id="hero" className="bg-gray-800 text-white p-4 pt-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center m-4">
                    <h1 data-aos="fade-right" className="flex items-center justify-center m-4 text-4xl leading-normal font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Hola! Soy Rodrigo Lajas</h1>
                    <p data-aos="fade-left" className="flex items-center justify-center m-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl font-bold leading-normal">Soy un desarrollador front-end en formación con pasión por crear aplicaciones web.</p>
                </div>
                <div data-aos="flip-down" className="flex flex-col items-center justify-center">
                    <Image src="/images/IMG_5893.webp" width={800} height={800} alt="Hero Image" className="w-4/5 h-auto object-contain my-8 border-4 border-l-lime-400 border-t-lime-200 border-r-lime-200 border-b-lime-400 shadow-lg rounded-lg" loading='lazy' />
                </div>
            </div>
            <div className="flex mx-auto items-center justify-center">
                <h3 className="flex items-center justify-center text-4xl font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-4xl sm:leading-normal">Skills</h3>
            </div>
            <div data-aos="fade-up" className="flex flex-wrap items-center justify-center">
                {skillsArray.map((skill) => (
                    <div key={skill.id}>
                        <a href={skill.link} target="_blank" rel="noopener noreferrer">
                            <Image src={skill.logo} alt={skill.name} width={96} height={96} className="w-24 h-24 p-2 m-2" loading='lazy' />
                        </a>
                    </div>
                ))
                }
            </div>
        </section>
    );
}