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
      <h1>Business Model Generator</h1>
    </div>
  )
}

const BMGPara = () => {
  return (
    <div>
      <p>
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
