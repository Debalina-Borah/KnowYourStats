import React from 'react'

function Navbar() {
    return (
        <div class="navBar">
            <div class="leftNavBar">
                <ul class="logo-section">
                    <li><a href="/"> <i style={{ color: "#E75C25" }} class="fas fa-poll"></i> LOGO</a></li>
                </ul>
            </div>
            <div class="rightNavBar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Account</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar