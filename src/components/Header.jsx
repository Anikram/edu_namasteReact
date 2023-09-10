import React from "react";
import {Link} from "react-router-dom";

export const Header = () => <div className='header'>
  <div className='logo-container'>
    <img
      className='logo'
      src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/media/f1dc908d5e3aa58ae7beed58c623acb6.png?resize=400x300&vertical=center" alt=""/>
  </div>
  <div className='nav-items'>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li>Contact us</li>
      <li>Cart</li>
    </ul>
  </div>
</div>
