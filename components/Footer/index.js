import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <UpperFooter className={styles.upper}/>
      <LowerFooter className={styles.lower}/>
    </div>
  )
}

// define all options as react components
const UpperFooter = ({ className }) => {
  return (
    <div className={className}>
      <Logo />
      <LogoTagline />
    </div>
  )
}

const LowerFooter = ({ className }) => {
  return (
    <div className={className}>
      <Copyright />
      <TermsAndConditions />
    </div>
  )
}

// define all options as react components
const Logo = () => {
  return (
    <div>
      <a href="#">
        <img src="/logo.svg" alt="SegmentX Logo" />
      </a>
    </div>
  )
}

const LogoTagline = () => {
  return (
    <div>
      <p>
        Tailored Software That Exceeds Expectations
      </p>
    </div>
  )
}

const Copyright = () => {
  return (
    <div>
      <p>
        © 2020 SegmentX. All rights reserved.
      </p>
    </div>
  )
}

const TermsAndConditions = () => {
  return (
    <div>
      <p>
        <a href="#">Terms and Conditions</a>
      </p>
    </div>
  )
}