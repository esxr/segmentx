import React from 'react'
import styles from './GetInTouch.module.scss'

export const GetInTouch = () => {
  return (
    <div>
      <GetInTouchHeading />
      <GetInTouchCTA />
    </div>
  )
}

// define all options as react components
const GetInTouchHeading = () => {
  return (
    <div>
      <h1>Get In Touch</h1>
    </div>
  )
}

const GetInTouchCTA = () => {
  return (
    <div>
      <p>
        If you have any questions, please contact us at
        &nbsp;<a href="mailto:">info@segmentx.com</a>
      </p>
    </div >
  )
}