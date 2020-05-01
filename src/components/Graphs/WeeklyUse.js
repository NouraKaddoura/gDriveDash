import React, { Component } from 'react';
import Chart from 'react-chartjs'

class WeeklyUse extends Component {

  getUse = () => {
    const tableData = this.props.tableData
    const use = tableData.map(t => {
      return t.weeklyUse
    })
    console.log(use)
    return use
  }

  renderChart = () =>{
    const weeklyUseOptions = this.getUse()

    if (weeklyUseOptions.length < 1) return ''

    const data = [
      {
        label: '1-2',
        value: weeklyUseOptions.filter(o => o === '1-2').length,
        color: '#0000ff'
      },
      {
        label: '3-5',
        value: weeklyUseOptions.filter(o => o === '3-5').length,
        color: '#00008b'
      },
      {
        label: '6+',
        value: weeklyUseOptions.filter(o => o === '6+').length,
        color: '#add8e6'
      },
    ]

    const chart = <Chart.Doughnut data={data} />

    return chart
 }

  render() {
    return (
      <div>
        <h1>How Often Per Week?</h1>
        {this.renderChart()}

      </div>
    )
  }
}

export default WeeklyUse
  // { this.renderChart() }
