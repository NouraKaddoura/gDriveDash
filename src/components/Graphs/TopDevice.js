import React, { Component } from 'react';

class TopDevice extends Component {

  getTopDevice = () => {
   const tableData = this.props.tableData
   const devicesNames = tableData.map(t => {
     return t.primaryDevice
   })

   const deviceCollections = {
    'Laptop (PC)': devicesNames.filter(d => d === 'Laptop (PC)'),
    'Laptop (Mac)': devicesNames.filter(d => d === 'Laptop (Mac)'),
    'Mobile Device (Android)': devicesNames.filter(d => d === 'Mobile Device (Android)'),
    'Mobile Device (iPhone)': devicesNames.filter(d => d === 'Mobile Device (iPhone)') ,
    'Tablet': devicesNames.filter(d => d === 'Tablet')
   }

   let topDeviceName = null
   let topDeviceCount = 0
   for (const device in deviceCollections) {
     if (topDeviceName === null){
      topDeviceCount = deviceCollections[device].length
      topDeviceName = device
     }
     else if(deviceCollections[device].length > topDeviceCount) {
      topDeviceName = device
      topDeviceCount = deviceCollections[device].length
     }
   }

   return topDeviceName
  }
  render() {
   return (
     <div>
       {this.getTopDevice()}
     </div>
   )
 }
}

export default TopDevice;
