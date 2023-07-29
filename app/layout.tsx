import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './common/provider';
import Header from './components/header';
import Footer from './components/footer';
import { Box, Flex } from './common/components';
import { Gopher, GopherPink, GopherYellow } from './components/button';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'おーがのブログ',
  description: 'しがないエンジニア　おーがのサイトです',
}

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
