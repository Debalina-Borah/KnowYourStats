import React from 'react'
import './css/Login.css'

function Login() {
    return (
        <div className="loginPage-background">
            <div className="contentWrapper">
                <div className="leftcontentWrapper">
                    <img src="images/Asset 1.png" alt="bg" />
                </div>
                <div className="rightcontentWrapper">
                    <h1>USER LOGIN</h1>
                    <form action="">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                        <div className="nestedFormDiv">
                            <label for="rememberMe">Remember Me</label>
                            <input type="checkbox" name="rememberMe" id="rememberMe" />
                            <a href="forgot_password_link">Forgot password?</a>
                        </div>
                        <input id="submit" style={{ backgroundImage: "linear-gradient(90deg,#E75C25,#F27C28)" }} type="submit" placeholder="login" />
                        <a id="forgotPassword" href="signIn.html">Create Account</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login