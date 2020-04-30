import React, { Component } from 'react'


//Make a weighted average in stars
import Rating from 'react-rating'
class ProductivityAverage extends Component {

  getProductivity = () => {
    const tableData = this.props.tableData
    let productivitySum = 0

    tableData.forEach(t => {
      productivitySum = productivitySum + t.productivity
    });

    const productivity =productivitySum / tableData.length

    console.log(tableData)

    return productivity
    //make it into an array?
    //Average the numbers in the array
            //function average(nums) {
            // return nums.reduce((a, b) => (a + b)) / nums.length;
            //}

    //function productArray() {

    //  productivities.split('')

    //}
    //insert that into a variable to display the stars
  }

//{this.getProductivity()}

  render() {
    return (
      <div>
        Productivity and Collobartion Average Rating:
        <Rating initialRating={this.getProductivity()} readonly

        />
      </div>
    )
  }
}

export default ProductivityAverage;

//average
//Usability Rating give the usability a numberic scale from the text
//function average(nums) {
 // return nums.reduce((a, b) => (a + b)) / nums.length;
 //}

 //https://www.npmjs.com/package/react-rating
