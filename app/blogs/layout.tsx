import Provider from "../../common/provider";

const siteName = "おーがの記事";
const description = "しがないエンジニア　おーがの記事です";
const url = "https://t09-blog.com/blogs";
const title = "Blogs";

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
  return <>{children};</>;
}
