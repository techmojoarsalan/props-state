import React, { useState } from 'react'
import Child from './Child';

function App() {
  return (
    <>
    <Child state="default"/>
    <Child state="bar"/>
    <Child state="foo"/>



    </>
  )
}

export default App;
