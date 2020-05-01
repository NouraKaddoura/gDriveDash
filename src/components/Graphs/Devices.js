import React, { Component } from 'react';
import Chart from 'react-chartjs'

class Devices extends Component {

  renderChart = () => {
    const tableData = this.props.tableData
    if (tableData.length < 1) return ''

    const devicesNames = tableData.map(t => {
      return t.devices
    })

    const parsedDevices = devicesNames.map(d => {
      return d.split(', ')
    })
    const devices = parsedDevices.flat()

    const data = {
      labels: ['Laptop (PC)', 'Laptop (Mac)', 'Mobile Device (Android)', 'Mobile Device (IPhone)', 'Tablet', 'Other'],
      datasets: [
        {
          label: 'Devices Used',
          fillColor: '#00008b',
          data: [
            devices.filter(o => o === 'Laptop (PC)').length,
            devices.filter(o => o === 'Laptop (Mac)').length,
            devices.filter(o => o === 'Mobile Device (Android)').length,
            devices.filter(o => o === 'Mobile Device (IPhone)').length,
            devices.filter(o => o === 'Tablet').length,
            devices.filter(o => o === 'Other (Please provide detail at the end of the survey)').length,
          ]
        }
      ]
    }

    const chart = <Chart.Radar data={data} />
    return chart
  }

  render() {
    return (
      <div>
        {this.renderChart()}
      </div>
    )
  }
}

export default Devices;
