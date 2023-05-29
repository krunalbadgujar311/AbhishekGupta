//Login

import React,{useState} from 'react'
import { useNavigate,Link } from "react-router-dom";
import backgroundImage from "../Image/Screenshot.png"
import Logo from "../Image/logo.png"
const Login = () => {

  return (
    
    <div className="Mainbox">
        <div component style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
        <div className="Innerbox">
            <div className="Signlogo">
              <img src={Logo}/>
            </div>
            <span className="Registration"><b>Login</b></span>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Sign in</button>
                
            </form>
            <p>Don't Have Account? <Link to="/register">Register Now</Link></p>
        </div>
    </div>
  )
}

export default Login
