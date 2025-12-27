import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // لتحسين سرعة ظهور النص (LCP)
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// إعدادات الشاشة لتحسين تجربة المستخدم على الموبايل (عامل ترتيب مهم لجوجل)
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  // العنوان المثالي بين 50-60 حرف ليظهر كاملاً في جوجل
  title: {
    default: "المختار للأثاث | استيراد أثاث من تركيا لجميع أنحاء العالم",
    template: "%s | المختار للأثاث التركي",
  },
  icons:{
   icon: "/favicon.ico" 
  },
  description:
    "الخيار الأول لاستيراد الأثاث من تركيا. متخصصون في غرف النوم الفاخرة، المطابخ الحديثة، وتجهيز صالونات الحلاقة بأفضل الأسعار وشحن دولي مضمون.",
  keywords: [
    "أثاث تركي فاخر", 
    "استيراد غرف نوم من تركيا", 
    "تجهيز صالونات حلاقة في تركيا", 
    "شحن أثاث من اسطنبول", 
    "وسيط تجاري في تركيا", 
    "مطابخ تركية عصرية",
    "تأثيث فلل ومشاريع",
    "اثاث",
    "موبيليا",
    "mdf ألواح",
    "mdf",
    "ألواح ام دي اف تركية",

  ],
  metadataBase: new URL("https://www.almuhtar.com"), // استبدل برابطك الحقيقي
  alternates: {
    canonical: "/",
    languages: {
      "ar-SA": "/ar",
    },
  },
  openGraph: {
    title: "المختار للأثاث | جودة التصنيع التركي والشحن العالمي",
    description: "نوفر لك أفضل قطع الأثاث من المصانع التركية مباشرة إلى باب منزلك.",
    url: "https://www.almuhtar.com",
    siteName: "المختار للأثاث",
    images: [
      {
        url: "https://www.almuhtar.com/assets/logo.png", // صورة احترافية لموقعك
        width: 1200,
        height: 630,
        alt: "معرض المختار للأثاث التركي",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // بيانات منظمة (Schema) تجعلك تظهر في "النتائج الغنية" Rich Snippets
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "المختار للأثاث",
    "url": "https://www.almuhtar.com",
    "logo": "https://www.almuhtar.com/logo.png",
    "description": "شركة رائدة في وساطة وتصدير الأثاث والديكور من تركيا إلى دول العالم.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-534-893-9441", // ضع رقمك الحقيقي
      "contactType": "sales",
      "areaServed": "Worldwide",
      "availableLanguage": ["Arabic", "English", "Turkish"]
    },
    "sameAs": [
      "https://www.facebook.com/almuhtar024concept",
      "https://www.instagram.com/almuhtar024concept"
    ]
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* حقن البيانات المنظمة لتصدر النتائج */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* هيكلية واضحة للصفحة تحبها محركات البحث */}
        <header>
            {/* ضع هنا النافبار الخاص بك */}
        </header>
        
        <main>{children}</main>
        
        <footer>
            {/* ضع هنا الفوتر الخاص بك */}
        </footer>
      </body>
    </html>
  );
}
