import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FileUpload from './components/FileUpload'
import JobRoleBreakdown from './components/Graphs/JobRoleBreakdown'
import WeeklyUse from './components/Graphs/WeeklyUse'
import LargeFileSharing from './components/Graphs/LargeFileSharing'
import Productivity from './components/Graphs/Productivity'
import PrimaryCapability from './components/Graphs/PrimaryCapability'
import TotalUsers from './components/Graphs/TotalUsers'
import Devices from './components/Graphs/Devices'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import ProductivityAverage from './components/Graphs/ProductivityAverage'
import TopDevice from './components/Graphs/TopDevice'
import { positions } from '@material-ui/system';


class App extends Component {
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

  render() {
    return (
      <div className="app">
        <Sidebar />
        <FileUpload onFileUpload={this.onFileUpload} />

        <Content tableData={this.state.tableData} />

        {/* <WeeklyUse tableData={this.state.tableData} />
        <TotalUsers tableData={this.state.tableData} />
        <ProductivityAverage tableData={this.state.tableData} />
        <TopDevice tableData={this.state.tableData} />
        <JobRoleBreakdown tableData={this.state.tableData} />
        <LargeFileSharing tableData={this.state.tableData} />
        <Productivity tableData={this.state.tableData} />
        <PrimaryCapability tableData={this.state.tableData} />
        <Devices tableData={this.state.tableData} /> */}

      </div>
    )
  }
}

export default App;
