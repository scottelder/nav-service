import React from 'react';
// import {events} from '../../mockdata.js';
import StaticNavList from './StaticNavList.jsx';

const StaticNav = (props) => {
  const navStyle = {
    backgroundColor: "#242121",
    width: "100%",
    margin: "0 auto",
    padding: "30px"
  }
  const buttStyle = {
    color: "white",
    padding: "2.5%",
    fontFamily: `"BlinkMacSystemFont", "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif`,
    // fontFamily: `"Roboto"`,
    fontSize: "22px",
    cursor: "pointer"
  } 
  return (
      <header style={navStyle}>
        <a style={buttStyle}>HOME</a>
        <a style={buttStyle}>AWAY</a>
        <a style={buttStyle}>HERE</a>
        <a style={buttStyle}>THERE</a>
        <a style={buttStyle}>WHENCE</a>
        <a style={buttStyle}>THENCE</a>
      </header>
  )
}

export default StaticNav;

{/* <a style={buttStyle} onClick={() => props.populate()}>INSERT!</a> */}