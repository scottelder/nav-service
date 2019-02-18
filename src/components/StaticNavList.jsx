import React from 'react';
import StaticListEntry from './StaticNavEntry.jsx'

const StaticNavList = (props) => {
  const listStyle = {
    position: "fixed",
    backgroundColor: "#242121",
    listStyle: "none",
    // opacity: 0.95
  }
  return (
    <ul style={listStyle}>
      {props.adventures.length  
      ? props.adventures.map((adventure, index) => <StaticListEntry key={index} adventure={adventure} adventureSelector={props.adventureSelector}/>)
      : null }
    </ul>
  )
}

export default StaticNavList;