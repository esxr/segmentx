import React from 'react'
import Image from 'next/image'

export const BusinessModelGenerator = () => {
  return (
    <div>
      <BMGHeading />
      <BMGPara />
      <BMGFlowchart />
    </div>
  )
}

// define all options as react components
const BMGHeading = () => {
  return (
    <div>
      <h1>Get to know about your business</h1>
    </div>
  )
}

const BMGPara = () => {
  return (
    <div>
      <p>
        We work with you to understand your unique business needs and then craft custom solutions that give you a competitive edge.
      </p>
    </div>
  )
}

const BMGFlowchart = () => {
  return (
    <div>
      <Image src="/businessModelMakerIllustration.svg" width="923px" height="753px" />
    </div>
  )
}
