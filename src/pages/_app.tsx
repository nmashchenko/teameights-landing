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
        <meta
          property="og:image"
          content="https://i.ibb.co/y8MRSbY/Logo-T8-S-image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://i.ibb.co/y8MRSbY/Logo-T8-S-image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Teameights - Unleashing Unmatched Collaboration Potential"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/y8MRSbY/Logo-T8-S-image.png"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
