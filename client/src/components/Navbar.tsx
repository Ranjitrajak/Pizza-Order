import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <>
    
      <nav className='navbar'>

      <NavLink to='/'><img src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pizza-logo-design-template-bcc6f3266366747a9d5d0333532eca67_screen.jpg?ts=1649320635' alt='logo' className='logo'/></NavLink>
        <div className='nav-center'>
       

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