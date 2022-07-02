import React from 'react'

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
      <h2>Web Development</h2>
      <p>
        We build websites that are user-friendly and easy to use. We use the latest technologies to create a website that is responsive and works on all devices.
      </p>
    </div>
  )
}

const MobileDevService = () => {
  return (
    <div>
      <h2>Mobile Development</h2>
      <p>
        We build mobile apps that are user-friendly and easy to use. We use the latest technologies to create a mobile app that is responsive and works on all devices.
      </p>
    </div>
  )
}

const Maintenance = () => {
  return (
    <div>
      <h2>Maintenance</h2>
      <p>
        We provide maintenance services for our clients. We use the latest technologies to create a website that is responsive and works on all devices.
      </p>
    </div>
  )
}