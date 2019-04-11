import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return(
    <div>
      <ul className='navbar'>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/projects'}><li>Projects</li></Link>
        <Link to={'/resume'}><li>Resume</li></Link>
        <Link to={'/contact'}><li>Contact</li></Link>
      </ul>
    </div>
  )
}
export default NavBar
