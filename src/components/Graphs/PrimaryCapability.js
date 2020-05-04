import React, { Component } from 'react';
import Chart from 'react-chartjs'

class PrimaryCapability extends Component {

  getCapability = () => {
    const tableData = this.props.tableData
    const capabilities = tableData.map(t => {
      return t.primaryCapability

    })
    return capabilities

  }

  renderChart = () => {
    const tableData = this.props.tableData

    if (tableData.length < 1) return ''

    const capabilities = tableData.map(t => {
      return t.primaryCapability
    })

    const parsedCapabilities = capabilities.map(c => {
      return c.split(', ')
    })
    const capabilityNames = parsedCapabilities.flat()

    const data = {
      labels: ['Docs', 'Sheets', 'Slides', 'Forms', 'File Sharing'],
      datasets: [
        {
          label: 'Capabilities',
          fillColor: '#6290C8',
          data: [
            capabilityNames.filter(c => c === 'Docs').length,
            capabilityNames.filter(c => c === 'Sheets').length,
            capabilityNames.filter(c => c === 'Slides').length,
            capabilityNames.filter(c => c === 'Forms').length,
            capabilityNames.filter(o => o === 'File Sharing').length
          ]
        }
      ]
    }

    const chart = <Chart.Bar data={data} />
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

export default PrimaryCapability;
