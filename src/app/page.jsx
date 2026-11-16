"use client";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';



export default function Page() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <section id="hero" className="bg-gray-800 text-white p-4 pt-12">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2">
                <div data-aos="flip-down" className="flex flex-col items-center justify-center">
                    <Image src="/images/IMG_5893.webp" width={800} height={800} alt="Hero Image" className="w-4/5 h-auto object-contain my-8 border-4 border-l-lime-400 border-t-lime-200 border-r-lime-200 border-b-lime-400 shadow-lg rounded-full" loading='eager' />
                </div>
                <div className="flex flex-col items-center justify-center m-4">
                    <h1 data-aos="fade-right" className="flex items-center justify-center m-4 text-4xl leading-normal font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Hola! Soy Rodrigo Lajas</h1>
                    <p data-aos="fade-left" className="flex items-center justify-center m-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 text-2xl font-bold leading-normal">Creo sitios web a medida para que tu negocio tenga una imagen profesional y confiable.</p>
                    <a
                        data-aos="fade-up"
                        href="https://ig.me/m/rodrigolajas.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-4 inline-block rounded-lg bg-lime-400 px-6 py-3 text-lg font-bold text-gray-900 transition hover:bg-lime-300"
                    >
                        Escribime!
                    </a>
                </div>
            </div>
            <section className="bg-gray-800 pt-12">
                <div className="text-center">
                    <p className="mt-4 text-lg font-medium text-white">Otros medios de contacto</p>
                </div>
            </section>
            <div data-aos="fade-up" className="grid grid-cols-1 gap-12 p-10 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="flex flex-col items-center justify-center text-center">
                    <span className="p-3 rounded-full bg-gray-500">
                        <Image src="/images/github-svgrepo-com.svg" width={24} height={24} alt='github' className="w-6 h-6" />
                    </span>
                    <h2 className="mt-4 text-lg font-medium text-white">Github</h2>
                    <p className="mt-2 text-gray-500">Explora mis proyectos y contribuciones en GitHub.</p>
                    <a href='https://github.com/Rodrigo-Lajas' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500">Mi perfil de GitHub</a>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <span className="p-3 rounded-full bg-gray-500">
                        <Image src="/images/linkedin-svgrepo-com.svg" width={24} height={24} alt='linkedin' className="w-6 h-6" />
                    </span>

                    <h2 className="mt-4 text-lg font-medium text-white">Linkedin</h2>
                    <p className="mt-2 text-gray-500">Conéctate para conocer mi experiencia profesional.</p>
                    <a href='https://www.linkedin.com/in/rodrigolajas/' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500">Mi perfil de Linkedin</a>
                </div>

                <div className="flex flex-col items-center justify-center text-center">
                    <span className="p-3 text-blue-500 rounded-full bg-gray-500">
                        <Image src="/images/mail-svgrepo-com.svg" width={24} height={24} alt='mail' className="w-6 h-6" />
                    </span>

                    <h2 className="mt-4 text-lg font-medium text-white">Mail</h2>
                    <p className="mt-2 text-gray-500">Contáctame para cualquier consulta o colaboración.</p>
                    <a href='mailto:rodrigolajas18@gmail.com' target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-500">Envíame un correo</a>
                </div>
            </div>

        </section>
    );
}