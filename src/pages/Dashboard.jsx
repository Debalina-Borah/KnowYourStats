import React from 'react';
import Chart from '../components/Chart';
import RightPanel from '../components/RightPanel';
import SideNav from '../components/SideNav';
import './css/Dashboard.css'

function Dashboard() {
    return (
        <>
            <div className="container">
                <aside className="logo">
                    <div className="top">
                        <div className="logo">
                            <img src="images/logo.png" alt="text" />
                            <h2>RMS</h2>
                        </div>
                        <div className="close" id="close-btn">
                            <span className="material-icons-sharp">close</span>
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
