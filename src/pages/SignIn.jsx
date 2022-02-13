import React from 'react'
import './css/SignIn.css'

function SignIn() {
    return (
        <div className="signInPage-background signIn">
            <div className="contentWrapper">
                <div className="leftcontentWrapper">
                    <img src="images/Asset 2.png" alt="bg" />
                </div>
                <div className="rightcontentWrapper">
                    <h1>USER SIGN-IN</h1>
                    <div className="Signthrough">
                        <button className="google"><i className="fab fa-google"></i> Sign In </button>
                    </div>
                    <p className="or">OR</p>
                    <form action="">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" name="email" id="email" />
                        <i className="fas fa-lock"></i>
                        <input id="password" type="password" placeholder="Password" />
                        <input id="submit" style={{ backgroundImage: "linear-gradient(90deg,#E75C25,#F27C28)" }} type="submit"
                            placeholder="login" />
                        <a id="loginLink" href="login.html">Already have an account? login instead</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn