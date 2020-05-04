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
  onFileUpload = (tableData) => {
    this.setState({
      tableData: tableData
    })
  }

  render() {
    return (
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default App;
