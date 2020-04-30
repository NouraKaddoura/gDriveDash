import React, { Component } from 'react';
import * as d3 from "d3";

class WeeklyUse extends Component {

  getUse = () => {
    const tableData = this.props.tableData
    const use = tableData.map(t => {
      return t.weeklyUse
    })
    return use
  }

  renderChart = () => {
    const data = this.getUse()
    const height = 30
    const width = 30
    const color ='#AAA'
    const arc = d3.arc()
      const arcs = d3.pie(data);

      const svg = d3.create("svg")
          .attr("viewBox", [-width / 2, -height / 2, width, height]);

      svg.selectAll("path")
        .data(arcs)
        .join("path")
          .attr("fill", d => color(d.data.name))
          .attr("d", arc)
        .append("title")
          .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

      svg.append("g")
          .attr("font-family", "sans-serif")
          .attr("font-size", 12)
          .attr("text-anchor", "middle")
        .selectAll("text")
        .data(arcs)
        .join("text")
          .attr("transform", d => `translate(${arc.centroid(d)})`)
          .call(text => text.append("tspan")
              .attr("y", "-0.4em")
              .attr("font-weight", "bold")
              .text(d => d.data.name))
          .call(text => text.filter(d => (d.endAngle - d.startAngle) > 0.25).append("tspan")
              .attr("x", 0)
              .attr("y", "0.7em")
              .attr("fill-opacity", 0.7)
              .text(d => d.data.value.toLocaleString()));

      return svg.node();
 }

  render() {
    return (
      <div>
        {this.getUse()}
        {this.renderChart()}
      </div>
    )
  }
}

export default WeeklyUse
