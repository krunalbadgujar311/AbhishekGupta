//Register

import React,{useState} from 'react'
import Add from "../Image/addAvatar.png"
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from "../Image/Screenshot.png"
import Logo from "../Image/logo.png"
const Register = () => {

return (
    <div className="Mainbox">
    <div component style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
        <div className="Innerbox">
            <div className="Signlogo">
              <img src={Logo}/>
            </div>
            <span className="Registration"><b>Register</b></span>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file" text='छायाचित्र'/>
                <label htmlFor="file">
                    <img src={Add} alt=""/>
                    <span>Image</span>
                </label>
                <button><b>Signup Now</b></button>
            </form>
            <p>Already registered? <Link to="/">Login</Link></p>
        </div>
    </div>
  )
}

export default Register