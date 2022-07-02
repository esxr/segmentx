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
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <TopBar />
      <Landing />
      <Description />
      <Portfolio />
      <BusinessModelGenerator />
      <Services />
      <GetInTouch />
      <Footer />
    </>
  )
}
