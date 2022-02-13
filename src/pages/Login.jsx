import React, { useRef } from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import './css/Login.css'

function Login() {

    const emailRef = useRef();
    const passRef = useRef();
    const { login } = useUserAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await login(emailRef.current.value, passRef.current.value)
            console.log("login")
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="loginPage-background login">
            <div className="contentWrapper">
                <div className="leftcontentWrapper">
                    <img src="images/Asset 1.png" alt="bg" />
                </div>
                <div className="rightcontentWrapper">
                    <h1>USER LOGIN</h1>
                    <form action="">
                        <i className="fas fa-user"></i>
                        <input type="email" placeholder="Email" ref={emailRef} />
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" ref={passRef} />
                        <div className="nestedFormDiv">
                            <label htmlFor="rememberMe">Remember Me</label>
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <a href="forgot_password_link">Forgot password?</a>
                        </div>
                        <input id="submit" style={{ backgroundImage: "linear-gradient(90deg,#E75C25,#F27C28)" }} type="submit" onClick={(e) => handleSubmit(e)} placeholder="login" />
                        <a id="forgotPassword" href="signIn.html">Create Account</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login