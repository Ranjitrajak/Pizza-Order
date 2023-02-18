import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <>
    
      <nav className='navbar'>
        <div className='nav-center'>
         <NavLink to='/'>Pizza logo</NavLink>

        <ul className='nav-links'>
          <li>
          <NavLink to="/order" style={{marginRight: '20px',color:'White'}}>Myorder</NavLink>
          </li>
          <li>
          <NavLink to="/sign" style={{marginRight: '100px',color:'White'}}>Login</NavLink>

          </li>
          <li>
          <NavLink to="/cart" style={{marginRight: '10px',color:'White'}}>Mycart</NavLink>

          </li>
         </ul>

        </div>
      


      </nav>
     
    
    


    
    
   
 
    
    </>
  )
}

export default Navbar