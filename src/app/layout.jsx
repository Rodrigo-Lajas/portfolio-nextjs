import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { noto } from "./UI/fonts";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Rodrigo Lajas",
    description: "Página web personal de Rodrigo Lajas",
    siteName: "Rodrigo Lajas",
    locale: "es_ES",
    image: "public/favicon.ico"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${noto.className} antialiased`}
            >
                <Navbar/>

                {children}
                <Footer/>
            </body>
        </html>
    );
}
