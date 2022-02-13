import React from 'react'

function Coverpage() {
    return (
        <div className="coverPage">
            <div className="contentWrapper">
                <h1>
                    Lorem Ipsum
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum consequuntur quaerat rerum quis odio, praesentium molestiae soluta incidunt, alias eius iure repellendus maxime.
                </p>
                <button> <a href="login.html"> Login </a> </button>
                <h6>Don't have a account? <a href="signIn.html" style={{ color: "#E75C25", fontWeight: "600", fontSize: "1.125rem" }}>Sign Up for free!</a> </h6>

            </div>
            <div className="imageWrapper">
                <img src="images/marks analysis.png" alt="coverPageImage" />
            </div>

            <div className="box1">
                <h1>hello</h1>

            </div>
            <div className="box2">

            </div>
        </div>
    )
}

export default Coverpage