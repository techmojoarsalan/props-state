import React from 'react'
import CurrentDate from './CurrentDate'

function Calender() {
    const date =   Date().toLocaleString()
  return (
    <div>
        <h3>What date is it?</h3>
        <CurrentDate date={date}/>
    </div>
  )
}

export default Calender