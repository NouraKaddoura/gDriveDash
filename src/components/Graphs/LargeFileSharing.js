import React, { Component } from 'react';
import Chart from 'react-chartjs'

// what are you using to share files: largeFileSharingM
class LargeFileSharing extends Component {

  getTopFileType = () => {
    const tableData = this.props.tableData
    const files = tableData.map(t => {
      return t.largeFileSharing
    })

    const parsedFiles = files.map(f => {
      return f.split(', ')
    })

    const fileNames = parsedFiles.flat()

    const fileCollections = {
      'Message Courier': fileNames.filter(f => f === 'Message Courier'),
      'USB': fileNames.filter(f => f === 'USB'),
      'FTP': fileNames.filter(f => f === 'FTP'),
      'MyBriefcase': fileNames.filter(f => f === 'MyBriefcase'),
      'Comply365': fileNames.filter(f => f === 'Comply365'),
      'Navigon': fileNames.filter(f => f === 'Navigon'),
      'Other (Please provide detail at the end of the survey)': fileNames.filter(f => f === 'Other (Please provide detail at the end of the survey)')
    }

    let topFileType = null
    let topFileCount = 0
    for (const file in fileCollections) {
      if (topFileType === null) {
        topFileCount = fileCollections[file].length
        topFileType = file
      }
      else if (fileCollections[file].length > topFileCount) {
        topFileType = file
        topFileCount = fileCollections[file].length
      }
    }

    return topFileType
  }

  renderChart = () => {
    const tableData = this.props.tableData

    if (tableData < 1) return ''

    const files = tableData.map(t => {
      return t.largeFileSharing
    })

    const parsedFiles = files.map(f => {
      return f.split(', ')
    })
    const fileNames = parsedFiles.flat()

    const data = {
      labels: ['Message Courier', 'USB', 'FTP', 'MyBriefcase', 'Comply365', 'Navigon', 'Other'],
      datasets: [
        {
          label: 'File Sharing',
          fillColor: '#6290C8',
          data: [
            fileNames.filter(o => o === 'Message Courier').length,
            fileNames.filter(o => o === 'USB').length,
            fileNames.filter(o => o === 'FTP').length,
            fileNames.filter(o => o === 'MyBriefcase').length,
            fileNames.filter(o => o === 'Comply365').length,
            fileNames.filter(o => o === 'Navigon').length,
            fileNames.filter(o => o === 'Other (Please provide detail at the end of the survey)').length,
          ]
        }
      ]
    }

    const chart = <Chart.Bar data={data} />
    return chart
  }


  render() {
    return (
      <div className='LargeFileSharing'>
        <div>{this.getTopFileType()}</div>
        {this.renderChart()}
      </div>
    )
  }
}

export default LargeFileSharing;
