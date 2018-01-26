import React from 'react';
import ScatterPlot from './scatter-plot';

const styles = {
    width   : 1200,
    height  : 600,
    padding : 30,
  };


// The number of data points for the chart.
const numDataPoints = 1000;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 100);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
    return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
  }
  

class Chart extends React.Component{
    constructor(props) {
      super(props);
      this.state = { data: randomDataSet() };
    }
  
    randomizeData() {
      this.setState({ data: randomDataSet() });
      
    }
  
    render() {
      return <div>
        <h1>React D3 </h1>
        <p>1000 random circles</p>
       <ScatterPlot {...this.state} {...styles} />
        <div className="controls">
          <button className="btn randomize" onClick={() => this.randomizeData()}>
            Randomize Data
          </button>
        </div>
      </div>
    }
  }


export default Chart;
 