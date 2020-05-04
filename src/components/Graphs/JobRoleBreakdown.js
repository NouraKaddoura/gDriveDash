import React, { Component } from 'react';
import Chart from 'react-chartjs'

class JobRoleBreakdown extends Component {

renderChart = () => {
  const tableData = this.props.tableData
  if (tableData.length < 1) return ''

  const roles = tableData.map(t => {
    return t.role
  })

  const data =[
    {
      label: 'Executive',
      value: roles.filter(o => o === 'Executive').length,
      color: '#6290C8'
    },
    {
      label: 'Manager',
      value: roles.filter(o => o === 'Manager').length,
      color: '#1768AC'
    },
    {
      label: 'Project/Program Manager',
      value: roles.filter(o => o === 'Project/Program Manager').length,
      color: '#06BEE1'
    },
    {
      label: 'Technologist(IT, Developer, etc)',
      value: roles.filter(o => o === 'Technologist(IT, Developer, etc)').length,
      color: '#1768AC'
    },
    {
      label: 'Communications',
      value: roles.filter(o => o === 'Communications').length,
      color: '#06BEE1'
    },
    {
      label: 'Supplier Management',
      value: roles.filter(o => o === 'Supplier Management').length,
      color: '#06BEE1'
    },
    {
      label: 'Manufacturing',
      value: roles.filter(o => o === 'Manufacturing').length,
      color: '#1768AC'
    },
    {
      label: 'Engineering',
      value: roles.filter(o => o === 'Engineering').length,
      color: '#6290C8'
    }
  ]
  const chart = <Chart.Pie data={data} />

  return chart
}
  render() {
    return (
      <div>
        {this.renderChart()}
      </div>
    )
  }
}

export default JobRoleBreakdown;
