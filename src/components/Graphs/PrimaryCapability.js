import React, { Component } from 'react';


class PrimaryCapability extends Component {

  getCapability = () => {
    const tableData = this.props.tableData
    const capabilities = tableData.map(t => {
      return t.primaryCapability
      
    })
    return capabilities

  }
  render() {
    return (
      <div>
        {this.getCapability()}
      </div>
    )
  }
}

export default PrimaryCapability;
