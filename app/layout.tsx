import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.almuhtar.com"),

  title: {
    default: "المختار للأثاث | توريد أثاث الى جميع أنحاء العالم",
    template: "%s | المختار للأثاث التركي",
  },

  description:
    "الخيار الأول لاستيراد الأثاث من تركيا. متخصصون في غرف النوم الفاخرة، المطابخ الحديثة، وتجهيز صالونات الحلاقة بأفضل الأسعار وشحن دولي مضمون.",

  keywords: [
    "أثاث تركي فاخر",
    "استيراد غرف نوم من تركيا",
    "تجهيز ديكور صالونات حلاقة ",
    "مطابخ تركية",
    "شحن أثاث من اسطنبول",
    "شركة اثاث في تركيا",
    "موبيليا",
    "اثاث",
    "MDF",
    "مصانع اثاث",
    "شركة مفروشات",
    "شركة موبيليا",
    "مصانع مفروشات",
    "شراء اثاث بالجملة",
    "مصانع mdf",
    "توريد مطابخ",
    "توريد غرف نوم",
    "توريد الواح mdf",
    "توريد اثاث",
    "Furniture manufacturers in Turkey",
    "شراء الواح mdf من تركيا",
    
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/ar",
    },
  },

  openGraph: {
    title: "المختار للأثاث | أثاث فاخر بجودة عالية",
    description: "فريق متخصص لتوفير أفضل قطع الأثاث لمنزلك.",
    url: "https://www.almuhtar.com",
    siteName: "المختار للأثاث",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "المختار للأثاث",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "المختار للأثاث",
    url: "https://www.almuhtar.com",
    logo: "https://www.almuhtar.com/logo.png",
    description: "فريق رائد في تصدير الأثاث إلى أنحاء العالم.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-534-893-9441",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["Arabic", "English", "Turkish"],
    },
    sameAs: [
      "https://www.facebook.com/almuhtar024concept",
      "https://www.instagram.com/almuhtar024concept",
    ],
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Favicon fallback for Google */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>{/* navbar */}</header>
        <main>{children}</main>
        <footer>{/* footer */}</footer>
      </body>
    </html>
  );
}
