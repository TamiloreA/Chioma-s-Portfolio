import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata = {
  title: {
    default: "Egwuatu Chioma - Creative Portfolio & Web Developer",
    template: "%s | Egwuatu Chioma",
  },
  description:
    "Creative portfolio of Egwuatu Chioma - A passionate web developer and designer specializing in React, Node.js, and MongoDB. Showcasing beautiful, responsive websites and innovative digital solutions.",
  keywords: [
    "Egwuatu Chioma",
    "portfolio",
    "web developer",
    "React developer",
    "Node.js developer",
    "MongoDB",
    "frontend developer",
    "fullstack developer",
    "UI/UX designer",
    "creative developer",
    "Lagos developer",
    "Nigeria developer",
    "responsive design",
    "modern websites",
    "JavaScript developer",
  ],
  authors: [{ name: "Egwuatu Chioma", url: "https://egwuatuchioma.com" }],
  creator: "Egwuatu Chioma",
  publisher: "Egwuatu Chioma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://egwuatuchioma.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://egwuatuchioma.com",
    title: "Egwuatu Chioma - Creative Portfolio & Web Developer",
    description:
      "Creative portfolio showcasing innovative web development projects, beautiful designs, and modern digital solutions by Egwuatu Chioma.",
    siteName: "Egwuatu Chioma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Egwuatu Chioma - Creative Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Egwuatu Chioma - Creative Portfolio & Web Developer",
    description: "Creative portfolio showcasing innovative web development projects and beautiful designs.",
    creator: "@egwuatuchioma",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Theme and Viewport */}
        <meta name="theme-color" content="#ec4899" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Egwuatu Chioma",
              url: "https://egwuatuchioma.com",
              image: "https://egwuatuchioma.com/profile-image.jpg",
              sameAs: [
                "https://linkedin.com/in/egwuatuchioma",
                "https://github.com/egwuatuchioma",
                "https://twitter.com/egwuatuchioma",
                "https://instagram.com/egwuatuchioma",
              ],
              jobTitle: "Web Developer & Designer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
              },
              email: "hello@egwuatuchioma.com",
              description:
                "Creative web developer and designer specializing in React, Node.js, and MongoDB. Creating beautiful, responsive websites and innovative digital solutions.",
              knowsAbout: [
                "Web Development",
                "React",
                "Node.js",
                "MongoDB",
                "JavaScript",
                "UI/UX Design",
                "Frontend Development",
                "Fullstack Development",
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
