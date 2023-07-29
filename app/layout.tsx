import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './common/provider';
import Footer from './components/footer';
import { Box, Flex } from './common/components';
import { Gopher, GopherPink, GopherYellow } from './components/button';

const inter = Inter({ subsets: ['latin'] })
const siteName = 'おーがのブログ';
const description = 'しがないエンジニア　おーがのサイトです';
const url = 'https://t09-blog.com/';

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
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    creator: '@o_ga09',
  },
  verification: {
    google: '',
  },
  alternates: {
    canonical: url,
  },
  metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Provider>
          <Flex direction="column" minH="80vh">
            {children}
          </Flex>
          <Box display='flex' w='100%' justifyContent='center' minH='10vh'>
            <GopherPink />
            <GopherYellow />
            <Gopher />
          </Box>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
