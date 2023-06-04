import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">Company Logo</div>
            <ul>
                <li><form className="topnav">
                    <input type="text" className='searchBox' placeholder="Search.."></input>
                </form>
                </li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">Create an event</a></li>
                <li><a href="/">Sign Up</a></li>
                <li><a href="/">Login</a></li>
                <div className="Menu" >
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </ul>


        </nav>
    )
}

export default Navbar
