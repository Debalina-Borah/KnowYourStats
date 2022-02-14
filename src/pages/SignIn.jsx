import React, { useRef } from 'react'
import { useUserAuth } from '../context/UserAuthContext';
// import './css/SignIn.css'

function SignIn() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const { signup } = useUserAuth();
    async function handleSubmit(e) {
        e.preventDefault();
        console.log("tap")
        try {
            await signup(emailRef.current.value, passRef.current.value)
        } catch (err) {
            console.log(err)
        }


    }
    return (
        <div className="signInPage-background">
            <div className="contentWrapper-s">
                <div className="leftcontentWrapper-s">
                    <img src="images/Asset 2.png" alt="bg" />
                </div>
                <div className="rightcontentWrapper-s">
                    <h1>USER SIGN-IN</h1>
                    <div className="Signthrough">
                        <button className="google"><i className="fab fa-google"></i> Sign In </button>
                    </div>
                    <p className="or">OR</p>
                    <form>
                        <i className="fas fa-user"></i>
                        <input type="text" ref={usernameRef} placeholder="Username" />
                        <i className="fas fa-envelope"></i>
                        <input type="email" ref={emailRef} placeholder="Email" name="email" id="email" />
                        <i className="fas fa-lock"></i>
                        <input id="password" ref={passRef} type="password" placeholder="Password" />
                        <input id="submit" style={{ backgroundImage: "linear-gradient(90deg,#E75C25,#F27C28)" }} type="submit"
                            placeholder="login" onClick={(e) => handleSubmit(e)} />
                        <a id="loginLink" href="login.html">Already have an account? login instead</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn