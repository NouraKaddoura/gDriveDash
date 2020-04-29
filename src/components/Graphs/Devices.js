import React, { Component } from 'react';


class Devices extends Component {

  getDevices = () => {
    const tableData = this.props.tableData
    const devices = tableData.map(t => {
      return t.devices
    })
    return devices
  }
  render() {
    return (
      <div>
        {this.getDevices()}
      </div>
    )
  }
}

export default Devices;
