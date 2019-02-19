import React from 'react';
import StaticListEntry from './StaticNavEntry.jsx'

const StaticNavList = (props) => {
  const listStyle = {
    position: "fixed",
    backgroundColor: "#242121",
    listStyle: "none",
    transitionProperty: `opacity`,
    transitionDuration: `200ms`,
    transitionTiming: `ease-in`,
    transitionDelay: 0,
  }
  const vanishStyle = {...listStyle};
  vanishStyle.opacity = 0;

  return (
    <ul style={listStyle}>
    {props.adventures.length  
      ? props.adventures.map((adventure, index) => <StaticListEntry key={index} adventure={adventure} selectAdventure={props.selectAdventure}/>)
      : null }
    </ul>
  )
}

export default StaticNavList;

// onMouseLeave={() => props.fadeListOut()}