import { Box } from "../common/components";
import Provider from "../common/provider";
import { Gopher, GopherPink, GopherYellow } from "../components/Button";
import { Footer } from "../components/Footer";
import { Header, ProfileHeader } from "../components/Header";

const siteName = "おーがのプロフィール";
const description = "しがないエンジニア　おーがのプロフィールです";
const url = "https://t09-blog.com/profile";
const title = "Profile";

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

export default function ProfileRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider>
        <ProfileHeader />
        {children}
      </Provider>
    </>
  );
}
