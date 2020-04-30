import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';

class TotalUsers extends Component {

  getUsers = () => {
    const tableData = this.props.tableData
    const users = tableData.length
    return users
  }
  render() {
    return (
      <div>
     
        <h1>Total Surveyed:</h1>
        <h1>{this.getUsers()}</h1>
      </div>
    )
  }
}

export default TotalUsers;
