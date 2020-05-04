import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';


class TotalUsers extends Component {

  getUsers = () => {
    const tableData = this.props.tableData
    const users = tableData.length
    return users
  }

  displayUsers = () => {
    const users = this.getUsers()
    console.log(users)
    if (users.length < 1) return ''
    const userDisplay = (
      <div>
        <h3 className="chartTitle">Total Users Surveyed</h3>
        <h1 className="userstotal">{this.getUsers()}</h1>
      </div>
    )
    return userDisplay
  }


  render() {

    return (
      <div className='TotalUsers'>
        {this.displayUsers()}
      </div>
    )
  }
}

export default TotalUsers;
