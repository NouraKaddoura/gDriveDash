import React, { Component } from 'react';
import readXlsxFile from 'read-excel-file'

class FileUpload extends Component {
  constructor () {
    super ()
    this.fileInput = React.createRef()
  }

  handleFileChange = async (event) => {
    const file = this.fileInput.current.files[0]
    // readXlsxFile(file)
    //   .then((rows) => {
    //     console.log(rows)
    //   })
    //   .catch((err) => {
    //     console.log('somehing messed up')
    //   })
    let rows = []
    try {
      rows = await readXlsxFile(file)
    } catch (err) {
      console.log('error:', err)
    }


    const answers = rows.map(r => {
      return {
        timestamp: r[0],
        emailAddress: r[1],
        role: r[2],
        devices: r[3],
        primaryDevice: r[4],
        largeFileSharing: r[5],
        usability: r[6],
        productivity:  r[7],
        primaryCapability: r[8],
        weeklyUse: r[9],
        concernsComments: r[10],
        impactComments: r[11],
        additonalComments:r[12]
      }
    })

    this.props.onFileUpload(answers)


    // 0: "Timestamp"
    // 1: "Email Address"
    // 2: "Which best fits your current job role?"
    // 3: "Check all the devices you use to access Google Drive"
    // 4: "What is your primary device when accessing Google Drive?"
    // 5: "How do you currently share large files with people outside of Boeing?"
    // 6: "How would you rate the usability of Google Drive?"
    // 7: "As an individual, I can become more productive and collaborative with this tool."
    // 8: "What capability of Google Drive do you primarily use? Check all that apply"
    // 9: "How often are you using Google Drive per week?"
    // 10: "Do you have any concerns with using Google Drive at Boeing?"
    // 11: "How will using Google Drive impact how you do your job at Boeing?"
    // 12: "Any additional comments? If you checked 'Other' above, use this space to expand."

  }

  render () {
    return (
      <div>
        <input
          type='file'
          onChange={this.handleFileChange}
          ref={this.fileInput}
        />
      </div>
    )
  }
}


export default FileUpload


// https://www.npmjs.com/package/read-excel-file
