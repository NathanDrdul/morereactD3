import React  from 'react';
import Axis   from './yaxisRender';

const YAxis = (props) => {
 
  const ySettings = {
    translate: `translate(${props.padding}, 0)`,
    scale: props.yScale,
    orient: 'left'
  };
  return <g className="y-axis">
    <YAxisRender {...YSettings}/>

  </g>
}

export default XYAxis;