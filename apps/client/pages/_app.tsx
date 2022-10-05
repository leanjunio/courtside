import { Banner } from '@courtside/ui/components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to client!</title>
      </Head>
      <main className="bg-slate-600">
        <Banner />
      </main>
    </>
  );
}

export default CustomApp;
