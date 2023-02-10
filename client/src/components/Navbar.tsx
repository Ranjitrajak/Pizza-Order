import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className='path'>
     
    
    
    <NavLink to="/order" style={{marginRight: '20px'}}>Myorder</NavLink><br></br>
    <NavLink to="/create" style={{marginRight: '100px'}}>signin</NavLink><br></br>
    <NavLink to="/cart" style={{marginRight: '10px'}}>MyCart</NavLink><br></br>
   
 
    </div>
  )
}

export default Navbar