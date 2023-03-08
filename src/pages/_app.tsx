import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/tag.css';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component className={inter.className} {...pageProps} />
    </Layout>
  );
}
