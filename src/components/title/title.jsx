import React, { use } from 'react'
import './title.css'


const Title = ({text, align = 'center', size='l'}) => {
    

  return (
    <div>
        <p className={`title-text size-${size} align-${align}`}>{text}</p>
    </div>
  )
}

export default Title