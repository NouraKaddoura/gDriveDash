import React, { Component } from 'react';


class JobRoleBreakdown extends Component {

getRoles = () => {
  const tableData = this.props.tableData
  const roles = tableData.map(t => {
    return t.role
  })
  return roles
}
  render() {
    return (
      <div>
        {this.getRoles()}
      </div>
    )
  }
}

export default JobRoleBreakdown;
