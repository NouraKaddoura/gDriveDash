import React, { Component } from 'react';
import Chart from 'react-chartjs'

class WeeklyUse extends Component {

  getUse = () => {
    const tableData = this.props.tableData
    const use = tableData.map(t => {
      return t.weeklyUse
    })
    return use
  }

  renderChart = () =>{
    const weeklyUseOptions = this.getUse()

    if (weeklyUseOptions.length < 1) return ''

    const data = [
      {
        label: '1-2',
        value: weeklyUseOptions.filter(o => o === '1-2').length,
        color: '#6290C8'
      },
      {
        label: '3-5',
        value: weeklyUseOptions.filter(o => o === '3-5').length,
        color: '#1768AC'
      },
      {
        label: '6+',
        value: weeklyUseOptions.filter(o => o === '6+').length,
        color: '#06BEE1'
      },
    ]

    const chart = (
      <div className='chart'>
        <h3 className='chartTitle'>How often per week?</h3>
        {this.renderLegend()}
        <Chart.Doughnut data={data} height={200}/>
      </div>
    )

    return chart
 }

 renderLegend = () => {
  const legendElement = (
  <ul className='legend'>
    <li>
      <span className='legendColor legendOne'></span>
      <span className='legendLabel'>1-2</span>
    </li>
    <li>
      <span className='legendColor legendTwo'></span>
      <span className='legendLabel'>3-5</span>
    </li>
    <li>
      <span className='legendColor legendThree'></span>
      <span className='legendLabel'>6+</span>
    </li>
  </ul>
  )
  return legendElement
 }

  render() {
    return (
      <div className='WeeklyUse'>
        {this.renderChart()}
      </div>
    )
  }
}

export default WeeklyUse
  // { this.renderChart() }
