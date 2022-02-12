import React from 'react';

function SideNav() {
    return (
        <div className="sidebar">

            <a href="/" className="links"><span className="material-icons-sharp">person</span> <h3>Profile</h3></a>
            <a href="/" className="links"><span className="material-icons-sharp">dashboard</span> <h3>Dashboard</h3></a>
            <a href="/" className="links"><span className="material-icons-sharp">bookmarks</span> <h3>Marks</h3></a>
            <a href="/" className="links"><span className="material-icons-sharp">quiz</span> <h3>Tests</h3></a>
            <a href="/" className="links"><span className="material-icons-sharp">settings</span> <h3>Settings</h3></a>
            <a href="/" className="links"><span className="material-icons-sharp">logout</span> <h3>Logout</h3></a>

        </div>
    );
}

export default SideNav;
