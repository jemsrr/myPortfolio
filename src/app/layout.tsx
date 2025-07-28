import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import SocialME from "./components/SocialME";

const league_Spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jems Rakholiya | Full-Stack Developer & Web Enthusiast",
  description:
    "Explore the portfolio of Jems Rakholiya, a passionate Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Offering expertise in building high-performance, SEO-friendly websites and applications. Based in Surat, Gujarat, India.",
  keywords: [
    "Jems R Rakholiya",
    "Jems",
    "Jems Rakholiya",
    "Full-Stack Developer",
    "Web Developer Surat",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Software Engineer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Gujarat Developer",
    "India Web Development",
    "SEO friendly websites",
  ],
  author: "Jems R Rakholiya",
  metadataBase: new URL('https://jemsrakholiya.netlify.app/'), // Important for absolute URLs below
  alternates: {
    canonical: 'https://jemsrakholiya.netlify.app/',
  },
  openGraph: {
    title: "Jems R Rakholiya | Full-Stack Developer & Web Enthusiast",
    description: "Explore the portfolio of Jems Rakholiya, a passionate Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://jemsrakholiya.netlify.app/", // Your website's URL
    siteName: "Jems Rakholiya's Portfolio",
    locale: "en_US",
    type: "website", // Or "profile" if it's primarily a personal profile
  },
  themeColor: "#0F172A",
  appleWebApp: {
    capable: true,
    title: 'Jems R Rakholiya',
    statusBarStyle: 'default',

  },
  applicationName: "Jems R Rakholiya Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${league_Spartan.className} bg-slate-900`}>
        <AnimatedCursor
          color="0, 255, 255"
          innerSize={15}
          innerScale={1.5}
          outerSize={25}
          outerScale={2}
        />
        <Navbar />
        <SocialME />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
