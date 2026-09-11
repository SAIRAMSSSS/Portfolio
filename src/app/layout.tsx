import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#040609",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sairam.dev"),
  title: "SAIRAM R // Technical Environment Artist & Graphics Programmer",
  description: "Portfolio of Sairam R: A builder who exists between code, art, and technology. C++, OpenGL 4.6, Vulkan, Unreal Engine 5, Blender, Substance, AI/ML, and 50+ Hackathons. Co-founder of Syntrix community.",
  keywords: [
    "Sairam R",
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
  authors: [{ name: "Sairam R", url: "https://github.com/SAIRAMSSSS" }],
  openGraph: {
    title: "SAIRAM R // Technical Environment Artist & Graphics Programmer",
    description: "I build worlds and the systems that run them. Art ↔ Code ↔ Games.",
    url: "https://github.com/SAIRAMSSSS",
    siteName: "Sairam R Digital Portfolio",
    images: [
      {
        url: "/videos/lifesupport_poster.jpg",
        width: 1280,
        height: 720,
        alt: "Sairam R Real-Time Environment Walkthrough",
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
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#040609] text-slate-100 min-h-screen antialiased overflow-x-hidden selection:bg-amber-500/30 selection:text-white font-tech">
        {children}
      </body>
    </html>
  );
}
