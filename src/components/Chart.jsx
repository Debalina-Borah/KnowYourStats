import React from 'react'
import { Bar, Doughnut, Line, Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
function Charts() {

    return (
        <main>
            <h1>Dashboard</h1>

            <div className="graphbox">

                <div className="box">
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

                <div className="box">
                    <Doughnut data={{
                        labels: [
                            'Red',
                            'Blue',
                            'Yellow'
                        ],
                        datasets: [{
                            label: 'My First Dataset',
                            data: [300, 50, 100],
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)'
                            ],
                            hoverOffset: 4,
                            borderRadius: 5,
                        }]

                    }} />
                </div>
            </div>

            <div className="graphbox">

                <div className="box">
                    <Line data={{
                        labels: ['1st', '2nd', '3rd', '4th', '5th', '6th',
                            '7th', '8th'
                        ],
                        datasets: [{
                            label: 'Semester-wise GPA',
                            data: [7.8, 8, 8.4, 7.9, 8.8, 8.5],
                            backgroundColor: '#fff',
                            borderColor: '#38d6eb',

                        }]

                    }} />
                </div>

                <div className="box">
                    <Radar data={{
                        labels: [
                            'MA101',
                            'PH101',
                            'CH101',
                            'EC101',
                            'ME101',
                            'EE101',
                            'EE101'
                        ],
                        datasets: [{
                            label: 'Last Years Avg Marks',
                            data: [65, 59, 90, 81, 56, 55, 40],
                            fill: true,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)'
                        }, {
                            label: 'Your Marks',
                            data: [28, 48, 40, 19, 96, 27, 100],
                            fill: true,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgb(54, 162, 235)',
                            pointBackgroundColor: 'rgb(54, 162, 235)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(54, 162, 235)'
                        }]

                    }} />
                </div>
            </div>

        </main>
    )
}

export default Charts