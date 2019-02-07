import React from 'react';
import StaticNavList from './StaticNavList.jsx';

class StaticNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      someState : ''
    }
  }
  render() {
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
      fontSize: "22px"
    } 
    return(
      <header style={navStyle}>
        <a style={buttStyle}>HOME</a>
        <a style={buttStyle}>AWAY</a>
        <a style={buttStyle}>HERE</a>
        <a style={buttStyle}>THERE</a>
        <a style={buttStyle}>WHENCE</a>
        <a style={buttStyle}>THENCE</a>
        <StaticNavList />
      </header>
    )
  }
}

export default StaticNav;



/*

/* Add a black background color to the top navigation 
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar 
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover 
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link 
.topnav a.active {
  background-color: #4CAF50;
  color: white;
}

*/