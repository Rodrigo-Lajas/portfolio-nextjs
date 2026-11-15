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
        
        <section id="about" className="bg-gray-800 text-white p-4 pt-12 ">
            <h3 className="flex items-center justify-center text-4xl font-noto-sans font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Acerca de mí</h3>
            <div data-aos="flip-down" className="w-full max-w-xs bg-gray-600 rounded-lg shadow-lg mx-auto">
                <Image className="object-cover w-full h-56 rounded-lg" src="/images/IMG_6802.webp" width={800} height={800} alt="avatar" loading='eager'/>
                    <div className="py-5 text-center">
                        <p className="block text-xl font-bold text-white" tabIndex="0" role="link">Rodrigo Lajas</p>
                        <span className="text-sm text-slate-300 ">FrontEnd Developer</span>
                    </div>
            </div>
            <p data-aos="fade-up" className="flex m-8 text-2xl font-noto-sans font-bold leading-normal text-slate-300 mx-8">Soy un desarrollador Front End en formación, apasionado por la creación de interfaces web atractivas y funcionales. Actualmente estoy aprendiendo a dominar tecnologías como React, Bootstrap y Tailwind CSS, que utilizo para construir proyectos dinámicos y modernos.</p>
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