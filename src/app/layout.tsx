import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#05070a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sairam.dev"),
  title: "SAIRAM S // Environment Artist & Graphics Programmer",
  description: "Portfolio of Sairam S: A builder who exists between code, art, and technology. C++, OpenGL 4.6, Vulkan, Unreal Engine 5, Blender, Substance, AI/ML, and 50+ Hackathons.",
  keywords: [
    "Sairam S",
    "Environment Artist",
    "Graphics Programmer",
    "Technical Artist",
    "OpenGL",
    "Vulkan",
    "Unreal Engine 5",
    "Blender",
    "Substance Painter",
    "C++",
    "Game Systems",
    "Syntrix"
  ],
  authors: [{ name: "Sairam S", url: "https://github.com/SAIRAMSSSS" }],
  openGraph: {
    title: "SAIRAM S // Environment Artist & Graphics Programmer",
    description: "I build worlds and the systems that run them. Art ↔ Code ↔ Games.",
    url: "https://github.com/SAIRAMSSSS",
    siteName: "Sairam S Digital Portfolio",
    images: [
      {
        url: "/images/art/block_beauty.png",
        width: 1280,
        height: 720,
        alt: "Sairam S Portfolio 3D Asset Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="bg-[#05070a] text-slate-100 min-h-screen font-sans antialiased overflow-x-hidden selection:bg-amber-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
