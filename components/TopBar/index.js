import React from 'react'
import { GetInTouch } from '../GetInTouch'

export const TopBar = () => {
  return (
    <div>
      {/* Left Side */}
      <div>
        <Logo />
        <OverviewOption />
        <ClientOption />
        <ProcessOption />
      </div>

      {/* Right side */}
      <div>
        <GetInTouchOption/>
      </div>
    </div>
  )
}

// define all options as react components
const Logo = () => {
  return (
    <div>
      <img src="/logo.png" alt="logo" />
    </div>
  )
}

const OverviewOption = () => {
  return (
    <div>
      <a href="#">Overview</a>
    </div>
  )
}

const ClientOption = () => {
  return (
    <div>
      <a href="#">Clients</a>
    </div>
  )
}

const ProcessOption = () => {
  return (
    <div>
      <a href="#">Process</a>
    </div>
  )
}

const GetInTouchOption = () => {
  return (
    <div>
      <GetInTouch />
    </div>
  )
}

export default TopBar

// import React from 'react'
// import { GetInTouch } from '../GetInTouch'
// import { Logo } from '../components/Logo'
// import { OverviewOption } from '../components/OverviewOption'
// import { ClientOption } from '../components/ClientOption'
// import { ProcessOption } from '../components/ProcessOption'
// import { GetInTouchOption } from '../components/GetInTouchOption'
// import styles from '../styles/Home.module.css'
// 
// export const TopBar = () => {
//   return (
//     <div className={styles.topBar}>
//       <div className={styles.left}>
//         <Logo />
//         <OverviewOption />
//         <ClientOption />
//         <ProcessOption />
//       </div>
//       <div className={styles.right}>
//         <GetInTouchOption />
//       </div>
//     </div>
//   )
// }
// 
// export default TopBar
// 
// // import React from 'react'
// // import { GetInTouch } from '../GetInTouch'
// // import { Logo } from '../components/Logo'
