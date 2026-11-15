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

                
        </section>
    );
}