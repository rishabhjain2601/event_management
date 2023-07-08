import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className="loginpage">
            <div className="loginbox">
                <h1><b>BUSINESS BULLS</b></h1>
                <div className='loginform'>
                    <div className="formtype">LOGIN</div>
                    <form action="#">
                        <input type="email" name="email" id="email" placeholder='Email ID' /><br /><br />
                        <input type="password" name="password" id="password" placeholder='Password' /><br /><br /><br />
                        {/* <button>Login</button> */}
                        <input type="button" value="Log in" />
                    </form>
                    <br />
                    New member? <a href="/">Sign Up Now</a>
                </div>
            </div>
            <div className="cards">
                <div className="card1"></div>
                <div className="card2"></div>
                <div className="card3"></div>
            </div>
        </div>
    )
}

export default Login
