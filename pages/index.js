import Head from 'next/head'
import Image from 'next/image'
import { BusinessModelGenerator } from '../components/BusinessModelGenerator'
import { Description } from '../components/Description'
import { Footer } from '../components/Footer'
import { GetInTouch } from '../components/GetInTouch'
import { Landing } from '../components/Landing'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { TopBar } from '../components/TopBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>SegmentX</title>
        <meta name="description" content="Tailored Software That Exceeds Expectations" />
        {/* SEO Optimization */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
        <meta name="google" value="notranslate" />
        <meta name="google-site-verification" content="Q_Q_Q_Q_Q" />
        <meta name="yandex-verification" content="Q_Q_Q_Q_Q" />
        <meta name="bing" value="notranslate" />
        <meta name="bing-verification" content="Q_Q_Q_Q_Q" />
        <meta name="msn" value="notranslate" />
        <meta name="msn-verification" content="Q_Q_Q_Q_Q" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Tailored Software That Exceeds Expectations" />
        <meta name="application-name" content="Tailored Software That Exceeds Expectations" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
      </Head>
      <main>
        <TopBar />
        <Landing />
        <Description />
        {/* <Portfolio />
        <BusinessModelGenerator />
        <Services />
        <GetInTouch />
        <Footer /> */}
      </main>
    </>
  )
}
