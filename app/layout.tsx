import type { Metadata } from "next";
import Navbar from '../components/Navbar'
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Carros Alugel",
  description: "Descubra o melhor aplicativo de vitrine de carros do mundo  ",
};

export default function RootLayout({children}: {children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
