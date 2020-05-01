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

  render () {
    // const classes = useStyles();
    //make content a flexbox
    return (
      <div className='content'>
        <div className='weeklyUse' item xs={5}>
          <Paper>Use Per Week <WeeklyUse tableData={this.props.tableData} /></Paper>
        </div>
        <div container spacing={3}>
          <Grid item xs={12}>
            <Paper>Upload Button + Title</Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper>Total Users Total Surveyed</Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper>Collab Rating <br/><br/> Usability Rating </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper><Devices tableData={this.props.tableData}/></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper><LargeFileSharing tableData={this.props.tableData} /></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper><PrimaryCapability tableData={this.props.tableData}/></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper><JobRoleBreakdown tableData={this.props.tableData}/></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>Show me Top results</Paper>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Content
