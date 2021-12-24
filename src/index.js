import React from 'react';
import ReactDOM from 'react-dom';



import App from './App';
import Navbarcom from "./components/Navbarcom"
import Slider from "./components/Slider"
import Services from "./components/Services"
import Aboutus from "./components/Aboutus"
import Clientcarousel from "./components/Clientcarousel"
import Contactus from "./components/Contactus"
import Footer from "./components/Footer"



import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
  <Navbarcom />
    <Slider/>
    <Aboutus />
    <Services />
    <Clientcarousel />
    <Contactus />
    <Footer />
    
   
    
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
