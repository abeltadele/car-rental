import React from 'react'
import './Navbar.css'
import { IoCarSportSharp } from "react-icons/io5";

const navbar = () => {
  return (
   <nav>
     <div className='logoClass' >
      <div className='logo'>
      <IoCarSportSharp className='carIcon'/>
      <h1 id='h1log'>ABEL<span>TAD</span></h1>
      </div>
      <navbar>
        <ul className='ul1'>
          <li><a href="#"> Home</a></li>
          <li><a href="#"> About</a></li>
          <li><a href="#"> Vehicle Model</a></li>
          <li><a href="#"> Testemonials</a></li>
          <li><a href="#"> Contact</a></li>
        </ul>
      </navbar>
      <div className='sign-in'>
        <button>Sign-in</button>
        <button>Register</button>
      </div>
    </div>

   </nav>
  )
}

export default navbar