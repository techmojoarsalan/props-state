import React from 'react'

function Child({state}) {
  return (
    <div>
        <h1>{state.toUpperCase()}</h1>

    </div>
  )
}

export default Child