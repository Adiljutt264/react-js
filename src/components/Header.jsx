import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='header'>Do To List</div>
    <nav className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/user/tempid'>User</Link>
    </nav>
    </>
  )
}
export default Header;