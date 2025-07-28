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
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Path to your OG image (e.g., a professional photo or a site banner)
        width: 1200,
        height: 630,
        alt: "Jems Rakholiya - Full-Stack Developer Portfolio",
      },
      // You can add more image sizes or types if needed
    ],
    locale: "en_US",
    type: "website", // Or "profile" if it's primarily a personal profile
  },

  // Twitter Card (for Twitter sharing)
  twitter: {
    card: "summary_large_image", // Can be 'summary', 'summary_large_image', 'app', or 'player'
    title: "Jems Rakholiya | Full-Stack Developer & Web Enthusiast",
    description: "Explore the portfolio of Jems Rakholiya, a passionate Full-Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    creator: "@YourTwitterHandle", // Replace with your Twitter handle if you have one
    images: ["https://yourwebsite.com/twitter-image.jpg"], // Path to your Twitter card image
  },

  // Robots Meta Tag: Tells search engines how to crawl your site.
  // 'index, follow' is the default and usually what you want for public pages.
  robots: {
    index: true,
    follow: true,
    nocache: true, // Recommended for portfolio sites to ensure fresh content is crawled
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false, // Allow Google to index images
      'max-video-preview': -1, // Allow full video preview
      'max-image-preview': 'large', // Allow large image preview in search results
      'max-snippet': -1, // Allow full snippet in search results
    },
  },

  // Verification tags for Google Search Console, Bing Webmaster Tools, etc.
  // Uncomment and fill these in after you register your site with them.
  // If you use domain verification in GSC, you might not need this.
  // verification: {
  //   google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  //   bing: 'YOUR_BING_VERIFICATION_CODE',
  //   yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  //   yahoo: 'YOUR_YAHOO_VERIFICATION_CODE',
  // },

  // Theme Color (for mobile browser UI)
  themeColor: "#0F172A", // Example: matching your bg-slate-900 or a brand color

  // Apple mobile web app capabilities
  appleWebApp: {
    capable: true,
    title: 'Jems Rakholiya',
    statusBarStyle: 'default',
    // startupImage: [
    //   '/assets/apple-touch-startup-image-768x1024.png',
    //   {
    //     url: '/assets/apple-touch-startup-image-1536x2048.png',
    //     media: '(device-width: 768px) and (device-height: 1024px)',
    //   },
    // ],
  },

  // Application Name (for manifest)
  applicationName: "Jems Rakholiya's Portfolio",

  // Other less common but potentially useful tags
  // referrer: 'origin-when-cross-origin', // Controls HTTP Referer header
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
