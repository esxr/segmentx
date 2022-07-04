import React from 'react'
import Image from 'next/image'
import styles from './Services.module.scss'

export const Services = () => {
  return (
    <div>
      <ServicesHeading />
      <ServicesPara />
      <ServicesIllustrations />
    </div>
  )
}

// define all options as react components
const ServicesHeading = () => {
  return (
    <div>
      <h1>Services we offer</h1>
    </div>
  )
}

const ServicesPara = () => {
  return (
    <div>
      <p>
        Explore the broad range of services we offer for our clients
      </p>
    </div>
  )
}

const ServicesIllustrations = () => {
  return (
    <div>
      <WebDevService />
      <MobileDevService />
      <Maintenance />
    </div>
  )
}

// define ServicesIllustrations as react components
const WebDevService = () => {
  return (
    <div>
      {/* import serviceWebDev.svg from public folder */}
      <Image src="/webDevIllustration.svg" alt="web development" width="279px" height="200px" />
      <p>Web Development</p>
    </div>
  )
}

const MobileDevService = () => {
  return (
    <div>
      <Image src="/mobileDevIllustration.svg" alt="mobile development" width="241px" height="200px" />
      <p>Mobile Development</p>
    </div>
  )
}

const Maintenance = () => {
  return (
    <div>
      <Image src="/maintenanceIllustration.svg" alt="maintenance" width="260px" height="200px" />
      <p>Maintenance</p>
    </div>
  )
}