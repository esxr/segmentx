import React from 'react'
import Image from 'next/image'
import styles from './Landing.module.scss'

export const Landing = () => {
  return (
    <div className={styles.landing}>
      {/* Left Side */}
      <Overview className={styles.overview} />
      {/* Right Side */}
      <Illustration className={styles.illustration} />
    </div>
  )
}

// define all options as react components
const Overview = ({ className }) => {
  return (
    <div className={className}>
      <h1 className={styles.heading}>Tailored Software That Exceeds Expectations</h1>
      <p className={styles.content}>
        We take on your most complex challenges and deliver software that is reliable, scalable and easy to use.
        <br /><br />
        We work with you to understand your unique business needs and then craft custom solutions that give you a competitive edge.</p>

      {/* CTA */}
      <div className={styles.cta}>
        <span>Get In Touch →</span>
      </div>
    </div>
  )
}

const Illustration = ({ className }) => {
  return (
    <div className={className}>
      <Image src="/landingIllustration.svg" width="521px" height="300px" />
    </div>
  )
}

