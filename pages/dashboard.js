import React from 'react'


import { Chart as ChartJS } from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Typography, Paper, Grid } from '@mui/material';

import './dashboard.module.scss'

const generateRandomData = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

export default function dashboard() {
    const cpuData5Minutes = generateRandomData(10);
    const ramData5Minutes = generateRandomData(10);

    // Simulate CPU and RAM usage data for 1 hour interval (24 data points)
    const cpuData1Hour = generateRandomData(24);
    const ramData1Hour = generateRandomData(24);

    // Simulate memory data (used and free RAM)
    const usedRAM = 2048
    const freeRAM = 1024

    // Simulate HDD data (used and free HDD)
    const usedHDD = 1024
    // const freeHDD = 546

    const lineChartData5Minutes = {
        labels: Array.from({ length: 5 }, (_, i) => ` ${i + 1}`),
        datasets: [
            {
                label: 'CPU Usage',
                data: cpuData5Minutes,
                borderColor: '#0078D4',
                backgroundColor: 'rgba(0, 120, 212, 0.2)',
                fill: true,
            },

        ],
    };

    const lineChartOptions5Minutes = {
        // Add your options here (title, axis labels, etc.)
        // For simplicity, we'll use default options
    };

    const lineChartData1Hour = {
        labels: Array.from({ length: 4 }, (_, i) => ` ${i + 1}`),
        datasets: [
            {
                label: 'CPU Usage',
                data: cpuData1Hour,
                borderColor: '#0078D4',
                backgroundColor: 'rgba(0, 120, 212, 0.2)',
                fill: true,
            },

        ],
    };

    const lineChartOptions1Hour = {
        // Add your options here (title, axis labels, etc.)
        // For simplicity, we'll use default options
    };

    const memoryPieChartData = {
        labels: ['Used RAM', 'Free RAM'],
        datasets: [
            {
                data: [usedRAM, freeRAM],
                backgroundColor: ['#0078D4', '#2B579A'],
            },
        ],
    };




    return (
        <div className="cpu-monitor-container">
            <Grid container spacing={3} justifyContent="center" alignItems="center" className="chart-container">
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} className="chart-paper">
                        <Typography variant="h5" align="center">
                            CPU Usage (5 Minutes Interval)
                        </Typography>
                        <Line data={lineChartData5Minutes} options={lineChartOptions5Minutes} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} className="chart-paper">
                        <Typography variant="h5" align="center">
                            CPU Usage (1 Hour Interval)
                        </Typography>
                        <Line data={lineChartData1Hour} options={lineChartOptions1Hour} />
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={2}> {/* Adjust the md value to make the Pie chart wider */}
                    <Paper elevation={3} className="chart-paper">
                        <Typography variant="h5" align="center">
                            Memory Usage
                        </Typography>
                        <Pie data={memoryPieChartData} width={2}     />
                    </Paper>
                </Grid>
            </Grid>

            {/* Add similar Grid items for HDD usage charts */}
        </div>
    )
}
