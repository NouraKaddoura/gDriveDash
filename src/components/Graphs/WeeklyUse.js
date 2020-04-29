import React, { Component } from 'react';


class WeeklyUse extends Component {

  getUse = () => {
    const tableData = this.props.tableData
    const use = tableData.map(t => {
      return t.weeklyUse
    })
    return use
  }
  render() {
    return (
      <div>
        {this.getUse()}
      </div>
    )
  }
}

export default WeeklyUse;
