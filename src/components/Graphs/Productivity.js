import React, { Component } from 'react';

//Make a weighted average in stars
class Productivity extends Component {

  getProductivity = () => {
    const tableData = this.props.tableData
    const productivities = tableData.map(t => {
      return t.productivity

    })
 
    return productivities


  }



  render() {
    return (
      <div>
        {this.getProductivity()}
      </div>
    )
  }
}

export default Productivity;

//average
