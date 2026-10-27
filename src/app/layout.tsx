import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#040609",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gamma-ten-1m75emxn99.vercel.app"),
  title: "SAI RAM R // DevOps & Infrastructure · Software Systems · AI/GPU Computing",
  description: "Portfolio of Sai Ram R: Practical software tools, reproducible systems, Linux, Docker, deployment workflows, AI/GPU computing, and low-level graphics.",
  keywords: [
    "Sai Ram R",
    "Sairam R",
    "DevOps",
    "Infrastructure Engineering",
    "Cloud Infrastructure",
    "Docker",
    "Linux",
    "CI/CD",
    "AI Systems",
    "GPU Computing",
    "PyTorch",
    "CUDA",
    "C++20",
    "Rust",
    "Vulkan",
    "REMoWser",
    "REMoAINTER",
    "REMoErminal",
    "Syntrix"
  ],
  authors: [{ name: "Sai Ram R", url: "https://github.com/SAIRAMSSSS" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "SAI RAM R // DevOps & Infrastructure · Software Systems · AI/GPU Computing",
    description: "I build practical software tools, explore how systems work under the hood, and turn experiments into reproducible projects.",
    url: "https://portfolio-gamma-ten-1m75emxn99.vercel.app/",
    siteName: "Sai Ram R Technical Portfolio",
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
      <body className="bg-[#040609] text-slate-100 min-h-screen antialiased overflow-x-hidden selection:bg-emerald-500/30 selection:text-white font-tech">
        {children}
      </body>
    </html>
  );
}
