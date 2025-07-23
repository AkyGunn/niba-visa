import React from 'react'
import './textchart.css'

const textchart = ({header,text}) => {
  return (
    <div className="text-chart">
        <h2 className='text-chart-header'>{header}</h2>
        <p>{text}</p>
    </div>
  )
}

export default textchart