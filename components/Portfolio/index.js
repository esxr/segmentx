import React from 'react'

export const Portfolio = () => {
  return (
    <div>
      <PortfolioHeading/>
      <ClientLogos/>
    </div>
  )
}

// define all options as react components
const PortfolioHeading = () => {
  return (
    <div>
      <h1>Portfolio</h1>
    </div>
  )
}

const ClientLogos = () => {
  return (
    <div>
      <p>
      We take on your most complex challenges and deliver software that is reliable, scalable and easy to use. We work with you to understand your unique business needs and then craft custom solutions that give you a competitive edge.</p>
    </div>
  )
}
