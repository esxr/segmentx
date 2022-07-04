import React from 'react'
import styles from './Description.module.scss'

export const Description = () => {
  return (
    <div>
      <DescriptionHeading/>
      <DescriptionPara/>
    </div>
  )
}

// define all options as react components
const DescriptionHeading = () => {
  return (
    <div>
      <h1>
      Know what we do. <br/>How we do it.
      </h1>
    </div>
  )
}

const DescriptionPara = () => {
  return (
    <div>
      <p>
      Designing industry-standard software is a process that requires innovation and a commitment to quality. Our software services company promises to deliver the best software possible, using the latest technology and tools.
      <br/>
      We follow a strict software development process to ensure that our products meet your expectations and exceed your expectations.
      </p>
    </div>
  )
}