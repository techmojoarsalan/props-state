import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Calender from './Calender'
import './index.css'
import MyComponent from './MyComponent'
import Todo from './Todo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Calender/>
    <MyComponent/>
    <Todo/>
  </React.StrictMode>
)
