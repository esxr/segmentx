import React from 'react'
import Image from 'next/image'

export const Landing = () => {
  return (
    <div>
      {/* Left Side */}
      <Overview />
      {/* Right Side */}
      <Illustration />
    </div>
  )
}

// define all options as react components
const Overview = () => {
  return (
    <div>
      <h1>Tailored Software That Exceeds Expectations</h1>
      <p>
        We take on your most complex challenges and deliver software that is reliable, scalable and easy to use. We work with you to understand your unique business needs and then craft custom solutions that give you a competitive edge.</p>

      {/* CTA */}
      <div className="cta">
        <a href="#">
          <button className="btn">
            <span>Get In Touch</span>
          </button>
        </a>
      </div>
    </div>
  )
}

const Illustration = () => {
  return (
    <>
      <Image src="/landingIllustration.svg" width="521px" height="300px" />
    </>
  )
}

