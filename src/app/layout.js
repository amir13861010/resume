import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { JsonLd } from "./JsonLd";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "رزومه امیر محمد رضازاده | توسعه‌دهنده فول‌استک",
  description:
    "رزومه حرفه‌ای امیر محمد رضازاده، توسعه‌دهنده فول‌استک با تخصص در React، Vue و Laravel.",
  keywords: [
    "رزومه",
    "توسعه‌دهنده فول‌استک",
    "React",
    "Laravel",
    "Vue",
    "امیر محمد رضازاده",
    "برنامه‌نویس",
    "ارومیه",
  ],
  authors: [{ name: "امیر محمد رضازاده" }],
  creator: "امیر محمد رضازاده",
  robots: { index: true, follow: true },
  openGraph: {
    title: "رزومه امیر محمد رضازاده | توسعه‌دهنده فول‌استک",
    description:
      "رزومه حرفه‌ای امیر محمد رضازاده، توسعه‌دهنده فول‌استک با تخصص در React و Laravel.",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "رزومه امیر محمد رضازاده",
    description: "توسعه‌دهنده فول‌استک — React، Vue، Laravel",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('resume-theme')||'purple';document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','purple')}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" data-theme="purple" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="google-site-verification" content="gASVaL159HlTg6frVQwcQ3u4Xsnh8g_sLBTtKMCr6Fc" />
      </head>
      <body className={`${vazirmatn.variable} antialiased`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
