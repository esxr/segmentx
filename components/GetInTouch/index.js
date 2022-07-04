import React from 'react'
import styles from './GetInTouch.module.scss'

export const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <GetInTouchHeading className={styles.heading} />
      <GetInTouchCTA className={styles.cta} />
    </div>
  )
}

// define all options as react components
const GetInTouchHeading = ({ className }) => {
  return (
    <div className={className}>
      <h1>Get In Touch</h1>
    </div>
  )
}

const GetInTouchCTA = ({ className }) => {
  return (
    <div className={className}>
      <p>
        If you have any questions, please contact us at
        &nbsp;<a href="mailto:">info@segmentx.com</a>
      </p>
    </div >
  )
}