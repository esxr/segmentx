import React from 'react'
import { GetInTouch } from '../GetInTouch'
// import topbar scss
import styles from './Topbar.module.scss'

export const TopBar = () => {
  const [state, setState] = React.useState(false);

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
      <div className={styles.upper}>
        <div className={styles.left}>
          <HamburgerMenu className={styles.hamburger} state={state} setState={setState} />
          <Logo />
          <div className={styles.options}>
            <Option option="Overview" className={styles.option} />
            <Option option="Our Clients" className={styles.option} />
            <Option option="Our Process" className={styles.option} />
          </div>
        </div>
        <GetInTouchOption className={styles.getInTouchOption} />
      </div>
      <MobileOptions className={styles.mobileOptions} state={state} />
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

const HamburgerMenu = ({ className, state, setState }) => {
  return (
    <div className={className} onClick={() => { setState(!state) }}>
      <img src="/hamburger.svg" alt="hamburger" />
    </div>
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

const MobileOptions = ({ className, state }) => {
  return (
    state ? <div className={className}>
      <Option option="Overview" className={styles.mobileoption} />
      <Option option="Our Clients" className={styles.mobileoption} />
      <Option option="Our Process" className={styles.mobileoption} />
    </div> : <></>
  )
}

export default TopBar
