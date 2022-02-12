import React from 'react';
import Chart from '../components/Chart';
import RightPanel from '../components/RightPanel';
import SideNav from '../components/SideNav';
import './css/Dashboard.css'

function Dashboard() {
    return (
        <>
            <div class="container">
                <aside class="logo">
                    <div class="top">
                        <div class="logo">
                            <img src="images/logo.png" alt="text" />
                            <h2>RMS</h2>
                        </div>
                        <div class="close" id="close-btn">
                            <span class="material-icons-sharp">close</span>
                        </div>
                    </div>
                    <SideNav />
                </aside>
                <Chart />
                <RightPanel />
            </div>
        </>
    );
}

export default Dashboard;
