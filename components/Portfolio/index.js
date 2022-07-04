import React from 'react'
import Image from 'next/image'
import styles from './Portfolio.module.scss'

export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <PortfolioHeading className={styles.heading}/>
      <ClientLogos className={styles.logos}/>
    </div>
  )
}

// define all options as react components
const PortfolioHeading = ({ className }) => {
  return (
    <div className={className}>
      Meet our Clients
    </div>
  )
}

const ClientLogos = ({ className }) => {
  return (
    <div className={className}>
      <Image src="/portfolio.svg" width="905px" height="55px" />
    </div>
  )
}
