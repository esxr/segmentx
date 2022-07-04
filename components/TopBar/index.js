import React from 'react'
import { GetInTouch } from '../GetInTouch'
// import topbar scss
import styles from './TopBar.module.scss'

export const TopBar = () => {
  return (
    // make a responsive toolbar
    // Logo, Overview, Clients, Process on the Left
    // GetInTouch on the Right
    // Background color: #1E1E20
    // Text color: #FCFBFE
    // toolbar height: 164px
    // padding: 8px
    // use TailwindCSS to make it responsive
    <div className={styles.topbar}>
      <div className={styles.left}>
        <HamburgerMenu className={styles.hamburger}/>
        <Logo />
        <div className={styles.options}>
          <Option option="Overview" className={styles.option} />
          <Option option="Our Clients" className={styles.option} />
          <Option option="Our Process" className={styles.option} />
        </div>
      </div>
      <GetInTouchOption className={styles.getInTouchOption} />
    </div>
  )
}

// define all options as react components
const Logo = () => {
  return (
    <div>
      <img src="/logo.svg" alt="logo" />
    </div>
  )
}

const HamburgerMenu = ({ className }) => {
  return (
    <>
      <img src="/hamburger.svg" alt="hamburger" className={className} />
    </>
  )
}

const GetInTouchOption = ({ className }) => {
  return (
    <div className={className}>
      Get In Touch
    </div>
  )
}

// make a generalized option component
const Option = ({ option, className }) => (
  <div className={className}>
    {option}
  </div>
)

export default TopBar
