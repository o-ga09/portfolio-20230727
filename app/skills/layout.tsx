import { Box } from "../common/components";
import { Gopher, GopherPink, GopherYellow } from "../components/Button";
import { Header } from "../components/Header";

const siteName = "おーがのスキル";
const description = "しがないエンジニア　おーがのスキルです";
const url = "https://t09-blog.com/skills";
const title = "Skills";

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
      <Header title={title} />
      {children}
      <Box display="flex" w="100%" justifyContent="center" minH="10vh">
        <GopherPink />
        <GopherYellow />
        <Gopher />
      </Box>
    </>
  );
}
