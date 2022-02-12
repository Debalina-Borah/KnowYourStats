import React from 'react'
import { Bar } from 'react-chartjs-2';

function Chart() {

    return (
        <main>
            <h1>Dashboard</h1>

            <div class="graphbox">

                <div class="box">
                    <Bar
                        options={{ responsive: true, }}
                        data={{
                            labels: ['MA101', 'PH101', 'CH101', 'EC101', 'EE101', 'ME101'],
                            datasets: [{
                                label: 'Marks',
                                data: [21, 19, 13, 27, 8, 15],
                                backgroundColor: [
                                    'rgba(255, 99, 132)',
                                    'rgba(54, 162, 235)',
                                    'rgba(255, 206, 86)',
                                    'rgba(75, 192, 192)',
                                    'rgba(153, 102, 255)',
                                    'rgba(255, 159, 64)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        }}
                    />
                </div>

                <div class="box">
                    <canvas id="myChart2"></canvas>
                </div>
            </div>

            <div class="graphbox">

                <div class="box">
                    <canvas id="myChart3"></canvas>
                </div>

                <div class="box">
                    <canvas id="myChart4"></canvas>
                </div>
            </div>

        </main>
    )
}

export default Chart