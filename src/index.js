import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css.css';
export default function App() {
window.navigator.geolocation.getCurrentPosition(
 (position) => console.log(position)
  )
 return (
 <div>
    <h1> Musikdin</h1>
    <p>Um sistema onde se encontra músicos</p>
 </div>
 
 )
}
ReactDOM.render(
 <App />,
 document.querySelector("#root")
)