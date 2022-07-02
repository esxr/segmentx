import React from 'react'

export const BusinessModelGenerator = () => {
  return (
    <div>
      <BMGHeading/>
      <BMGPara/>
      <BMGFlowchart/>
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
      <p>
      </p>
    </div>
  )
}
