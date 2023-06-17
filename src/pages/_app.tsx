import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Teameights - Unleashing Unmatched Collaboration Potential</title>
        <meta
          name="description"
          content="Experience the Future of Collaboration: Join the Beta Test of Our Cutting-Edge Platform and Reap Exclusive Launch Benefits!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Teameights - Unleashing Unmatched Collaboration Potential"
        />
        <meta
          property="og:description"
          content="Experience the Future of Collaboration: Join the Beta Test of Our Cutting-Edge Platform and Reap Exclusive Launch Benefits!"
        />
        <meta property="og:image" content="https://ibb.co/m0Yk7CR" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
