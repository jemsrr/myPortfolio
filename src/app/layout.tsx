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
    "Jems Rakholiya",
    "Full-Stack Developer",
    "Web Developer Surat",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Express.js",
    "Gujarat Developer",
    "India Web Development",
    "SEO friendly websites",
  ],
  // CORRECTED LINE: Change 'author' to 'authors'
  authors: [{ name: "Jems Rakholiya", url: "https://jemsrakholiya.netlify.app" }], // Using the recommended array format
  metadataBase: new URL('https://jemsrakholiya.netlify.app'),
  alternates: {
    canonical: 'https://jemsrakholiya.netlify.app',
  },
  openGraph: {
    title: "Jems Rakholiya | Full-Stack Developer & Web Enthusiast",
    description: "Explore the portfolio of Jems Rakholiya, a passionate Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://jemsrakholiya.netlify.app/",
    siteName: "Jems Rakholiya's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jemsrakholiya.netlify.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jems Rakholiya - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jems Rakholiya | Full-Stack Developer & Web Enthusiast",
    description: "Explore the portfolio of Jems Rakholiya, a passionate Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@YourTwitterHandle", // Replace with your actual Twitter handle if you have one
    images: ["https://jemsrakholiya.netlify.app/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: "#0F172A",
  appleWebApp: {
    capable: true,
    title: 'Jems Rakholiya Portfolio',
    statusBarStyle: 'default',
  },
  applicationName: "Jems Rakholiya Portfolio",
  viewport: "width=device-width, initial-scale=1",
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
