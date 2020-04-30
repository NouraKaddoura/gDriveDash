import React, { Component } from 'react';

// what are you using to share files: largeFileSharingM
class LargeFileSharing extends Component {

  getFiles = () => {
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


  render() {
    return (
      <div>
        {this.getFiles()}
      </div>
    )
  }
}

export default LargeFileSharing;
