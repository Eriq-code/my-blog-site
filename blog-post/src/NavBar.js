import React from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom';
function NavBar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/" className='link'>Home</Link>
            </li>
            <li>
                <Link to="/AboutPage" className='link'>About</Link>
            </li>
            <li>
                <Link to="/articles" className='link'>Articles</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar