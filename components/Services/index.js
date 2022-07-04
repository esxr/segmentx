import React from 'react'
import Image from 'next/image'
import styles from './Services.module.scss'

export const Services = () => {
  return (
    <div className={styles.services}>
      <ServicesHeading className={styles.heading} />
      <ServicesPara className={styles.para} />
      <ServicesIllustrations className={styles.illustrations} />
    </div>
  )
}

// define all options as react components
const ServicesHeading = ({ className }) => {
  return (
    <div className={className}>
      <h1>Services we offer</h1>
    </div>
  )
}

const ServicesPara = ({ className }) => {
  return (
    <div className={className}>
      <p>
        Explore the broad range of services we offer for our clients
      </p>
    </div>
  )
}

const ServicesIllustrations = ({ className }) => {
  return (
    <div className={className}>
      <WebDevService className={styles.serviceIllustration} />
      <MobileDevService className={styles.serviceIllustration} />
      <Maintenance className={styles.serviceIllustration} />
    </div>
  )
}

// define ServicesIllustrations as react components
const WebDevService = ({ className }) => {
  return (
    <div className={className}>
      {/* import serviceWebDev.svg from public folder */}
      <Image src="/webDevIllustration.svg" alt="web development" width="279px" height="200px" />
      <p>Web Development</p>
    </div>
  )
}

const MobileDevService = ({ className }) => {
  return (
    <div className={className}>
      <Image src="/mobileDevIllustration.svg" alt="mobile development" width="241px" height="200px" />
      <p>Mobile Development</p>
    </div>
  )
}

const Maintenance = ({ className }) => {
  return (
    <div className={className}>
      <Image src="/maintenanceIllustration.svg" alt="maintenance" width="260px" height="200px" />
      <p>Maintenance</p>
    </div>
  )
}