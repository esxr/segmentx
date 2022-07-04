import React from 'react'
import styles from './Description.module.scss'

export const Description = () => {
  return (
    <div className={styles.description}>
      <DescriptionHeading className={styles.heading}/>
      <DescriptionPara className={styles.para}/>
    </div>
  )
}

// define all options as react components
const DescriptionHeading = ({ className }) => {
  return (
    <div className={className}>
      Know what we do. <br/>How we do it.
    </div>
  )
}

const DescriptionPara = ({ className }) => {
  return (
    <div className={className}>
      <p>
      Designing industry-standard software is a process that requires innovation and a commitment to quality. Our software services company promises to deliver the best software possible, using the latest technology and tools.
      <br/><br/>
      We follow a strict software development process to ensure that our products meet your expectations and exceed your expectations.
      </p>
    </div>
  )
}