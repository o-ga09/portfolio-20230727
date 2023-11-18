import "./globals.css";
import { Inter } from "next/font/google";
import ScriptGa from "./components/GA";
import ScriptGAd from "./components/ScriptGAd";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const siteName = "おーがのブログ";
const description = "しがないエンジニア　おーがのサイトです";
const url = "https://t09-blog.com/";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    creator: "@o_ga09",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_VERIFICATION,
  },
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <ScriptGAd />
        <ScriptGa />
      </body>
    </html>
  );
}
