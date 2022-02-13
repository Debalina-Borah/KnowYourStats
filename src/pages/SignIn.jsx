import React from 'react'
import './css/SignIn.css'

function SignIn() {
    return (
        <div class="signInPage-background">
            <div class="contentWrapper">
                <div class="leftcontentWrapper">
                    <img src="images/Asset 2.png" alt="bg" />
                </div>
                <div class="rightcontentWrapper">
                    <h1>USER SIGN-IN</h1>
                    <div class="Signthrough">
                        <button class="google"><i class="fab fa-google"></i> Sign In </button>
                    </div>
                    <p class="or">OR</p>
                    <form action="">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" name="email" id="email" />
                        <i class="fas fa-lock"></i>
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