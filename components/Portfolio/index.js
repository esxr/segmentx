import React from 'react'
import Image from 'next/image'

export const Portfolio = () => {
  return (
    <div>
      <PortfolioHeading />
      <ClientLogos />
    </div>
  )
}

// define all options as react components
const PortfolioHeading = () => {
  return (
    <div>
      Meet our Clients
    </div>
  )
}

const ClientLogos = () => {
  return (
    <div>
      <Image src="/portfolio.svg" width="905px" height="55px" />
    </div>
  )
}
