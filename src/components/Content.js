import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//https://medium.com/@luqman.qureshi/create-animated-sidebar-component-in-react-with-react-transition-group-7956ed575c00
import TopDevice from './Graphs/TopDevice';
import WeeklyUse from './Graphs/WeeklyUse'
import LargeFileSharing from './Graphs/LargeFileSharing'
import Devices from './Graphs/Devices'
import JobRoleBreakdown from './Graphs/JobRoleBreakdown'
import PrimaryCapability from './Graphs/PrimaryCapability.js'
import './Graphs/styles.css'
import FileUpload from '../components/FileUpload';
import ProductivityAverage from './Graphs/ProductivityAverage'
import TotalUsers from './Graphs/TotalUsers';

import './Content.css'
//import { Grid, Row, Col } from 'react-flexbox-grid';

// src/components/Content.js


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

class Content extends Component {
  constructor() {
    super()
    this.state = {
      tableData: []
    }
  }


  onFileUpload = (tableData) => {
    this.setState({
      tableData: tableData
    })
  }

  render () {
    // const classes = useStyles();
    //make content a flexbox
    return (
      <div className="content">

          <div className='fileupload'>
              <FileUpload onFileUpload={this.onFileUpload} tableData={this.state.tableData} />
          </div>


        <div className="firstrow graphRow">
          <WeeklyUse tableData={this.state.tableData} />
          <div className="usabilityCollab">
           <TotalUsers tableData={this.state.tableData}/>
            <h3 style={{paddingLeft:10}}>Productivity & Collaboration Rating Average</h3><ProductivityAverage tableData={this.state.tableData} />
          </div>
        </div>

        <div className="secondrow graphRow">
          <Devices tableData={this.state.tableData} />
          <LargeFileSharing tableData={this.state.tableData} />
        </div>




            <PrimaryCapability tableData={this.state.tableData} />
            <JobRoleBreakdown tableData={this.state.tableData} />
          <div>
            Show me top results
        </div>



      </div>

    );
  }
}

export default Content
