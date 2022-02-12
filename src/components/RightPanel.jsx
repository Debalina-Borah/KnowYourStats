import React from 'react'

function RightPanel() {
    return (
        <div class="right">
            <div class="top">
                <button id="menu-btn">
                    <span class="material-icons-sharp">menu</span>
                </button>
                <div class="theme-toggler">
                    <span class="material-icons-sharp active">light_mode</span>
                    <span class="material-icons-sharp">dark_mode</span>

                </div>
            </div>

            <div class="profile">
                <div class="info">
                    <p>Hey,<b>Name</b></p>
                </div>

                <div class="profile-photo">
                    <img src="images/person.png" alt="text" />
                </div>
            </div>

            <div class="recent-updates">
                <h2>Recent</h2>

                <div class="updates">
                    <div class="update">
                        <div class="message">
                            Added end sem marks
                        </div>
                    </div>

                    <div class="update">
                        <div class="message">
                            Added minor 2 marks
                        </div>
                    </div>

                    <div class="update">
                        <div class="message">
                            Added mid sem marks
                        </div>
                    </div>

                    <div class="update">
                        <div class="message">
                            Added minor 1 marks
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightPanel