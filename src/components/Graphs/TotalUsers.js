import React, { Component } from 'react';


class TotalUsers extends Component {

  getUsers = () => {
    const tableData = this.props.tableData
    const users = tableData.length
    return users
  }
  render() {
    return (
      <div>
        {this.getUsers()}
      </div>
    )
  }
}

export default TotalUsers;
