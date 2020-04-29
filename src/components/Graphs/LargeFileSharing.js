import React, { Component } from 'react';

// what are you using to share files: largeFileSharing
class LargeFileSharing extends Component {

  getFiles = () => {
    const tableData = this.props.tableData
    const files = tableData.map(t => {
      return t.largeFileSharing
    })
    return files
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
