import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class PieBox extends Component {

    render() {
        const chart = {
            labels: this.props.labels,
            datasets: [
                {
                    dataPie: [300, 50, 100],
                    backgroundColor: [
                        '#98acc4',
                        '#6a496a',
                        '#7b6887',
                        '#8a89a5'
                    ],
                    hoverBackgroundColor: [
                        '#98acc4',
                        '#6a496a',
                        '#7b6887',
                        '#8a89a5'
                    ],
                    data: this.props.data
                }
            ]
        }
        return (
            <div>
                <h2><b>Pie Chart</b></h2>
                <Pie
                    ref="chart"
                    height={100}
                    data={chart}
                />
            </div>
        )
    }
}