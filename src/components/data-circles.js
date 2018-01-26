import React from 'react';

const renderCircles = (props) => {
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 7,
      fill: "#b5e7a0",
      stroke: "black",
      
      key: index
    };
    return <circle {...circleProps} />;
  };
};

const Datacircles = (props) => {
  return <g>{ props.data.map(renderCircles(props)) }</g>
}

export default Datacircles;