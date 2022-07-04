import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div>
      <UpperFooter />
      <LowerFooter />
    </div>
  )
}

// define all options as react components
const UpperFooter = () => {
  return (
    <>
      <Logo />
      <LogoTagline />
    </>
  )
}

const LowerFooter = () => {
  return (
    <>
      <Copyright />
      <TermsAndConditions />
    </>
  )
}

// define all options as react components
const Logo = () => {
  return (
    <div>
      <a href="#">
        <img src="https://segmentx.com/static/images/logo.png" alt="SegmentX Logo" />
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