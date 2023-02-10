import { FC, useEffect } from "react"
// import { AppBar, Toolbar, styled } from '@mui/material';
import Navbar from "./Navbar";
import '../styles/home.css'


 

const Home : FC = (): JSX.Element =>{
  return (
    <>
    <div className="Home">
      <div>
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-logo-design-template-bcc6f3266366747a9d5d0333532eca67_screen.jpg?ts=1649320635" height="100px" width='200px'
       alt="logo"/> 

      </div>
      <div id="nav">
      <Navbar/>   

      </div>
    
      
             
      </div>
    </>
  
  )
}

export default Home