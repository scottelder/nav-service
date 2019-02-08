import React from 'react';
// import {events} from '../../mockdata.js';
import StaticNavHeader from './StaticNavHeader.jsx';

const StaticNav = (props) => {
  const navStyle = {
    backgroundColor: "#242121",
    width: "100%",
    margin: "0 auto",
    padding: "30px"
  }
  return (
      <header style={navStyle}>
      {props.elements.map((element, index) => (
          <StaticNavHeader 
            key={index}
            element={element} 
            biomes={props.biomes} 
            adventures={props.adventures}
            showList={props.showList}
            showEntry={props.showEntry}
            toggleList={props.toggleList}
          />
      ))}
      </header>
  )
}

export default StaticNav;

{/* <a style={buttStyle} onClick={() => props.populate()}>INSERT!</a> */}