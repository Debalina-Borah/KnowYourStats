import React from 'react'

function RightPanel() {
    return (
        <div className="right">
            <div className="top">
                <button id="menu-btn">
                    <span className="material-icons-sharp">menu</span>
                </button>
                <div className="theme-toggler">
                    <span className="material-icons-sharp active">light_mode</span>
                    <span className="material-icons-sharp">dark_mode</span>

                </div>
            </div>

            <div className="profile">
                <div className="info">
                    <p>Hey,<b>Name</b></p>
                </div>

                <div className="profile-photo">
                    <img src="images/person.png" alt="text" />
                </div>
            </div>

            <div className="recent-updates">
                <h2>Recent</h2>

                <div className="updates">
                    <div className="update">
                        <div className="message">
                            Added end sem marks
                        </div>
                    </div>

                    <div className="update">
                        <div className="message">
                            Added minor 2 marks
                        </div>
                    </div>

                    <div className="update">
                        <div className="message">
                            Added mid sem marks
                        </div>
                    </div>

                    <div className="update">
                        <div className="message">
                            Added minor 1 marks
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPanel