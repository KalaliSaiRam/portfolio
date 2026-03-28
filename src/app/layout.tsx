import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cursor } from "@/components/ui/Cursor";

// Headings
const sora = Sora({ 
  subsets: ["latin"], 
  variable: "--font-sora",
  display: 'swap',
});

// Body
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kalali Sai Ram Goud | AI & Full Stack Developer",
  description: "Portfolio of Kalali Sai Ram Goud - AI Engineer and Full Stack Developer based in Hyderabad, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable} ${outfit.variable}`}>
      <body className="font-outfit bg-[#05030a] text-white antialiased selection:bg-fuchsia-600/30 overflow-x-hidden">
        
        {/* Massive Ambient Aurora Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          {/* Deep Purple Base Mesh */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-900/20 blur-[150px] mix-blend-screen" />
          {/* Neon Pink/Fuchsia Glow */}
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[70%] rounded-full bg-fuchsia-800/20 blur-[180px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite_alternate]" />
          {/* Cyan/Blue Lower Glow */}
          <div className="absolute bottom-[-20%] left-[20%] w-[80%] h-[50%] rounded-full bg-cyan-900/15 blur-[160px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_alternate]" />
        </div>

        <Cursor />
        <Navbar />
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-between pb-12 pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
