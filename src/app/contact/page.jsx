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
        <section className="bg-gray-800 pt-12">
                <div className="text-center">
                    <p className="flex items-center justify-center text-4xl font-noto-sans font-bold w-auto m-8 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-lime-100 sm:text-6xl sm:leading-normal">Contacto</p>
                    <p className="my-8 text-gray-500">Siéntete libre de contactarme para cualquier consulta.</p>
                </div>

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