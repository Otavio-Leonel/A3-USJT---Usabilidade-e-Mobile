import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import Header from './header';
import Footer from './footer';
import Formulario from './formulario';
import { Router } from './router';


export default function App() {
   window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position)
   )

   return (
      <>
         {/* header inicio */}
         <Header />
         {/* header fim */}

         <Router/>

         {/* footer inicio */}
         <Formulario/>
         <Footer />
         {/* footer fim */}

      </>
   )
}
ReactDOM.render(
   <App />,
   document.querySelector("#root")
)