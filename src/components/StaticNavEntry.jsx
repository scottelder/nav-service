import React from 'react';

const StaticNavEntry = (props) => {
  const itemStyle = {
    color: "white",
    margin: 0,
    fontFamily: `"BlinkMacSystemFont", "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif`,
    fontSize: "22px",
    cursor: "pointer",
    transition: `color 195ms ease-in 0s`,
    transitionProperty: `color`,
    transitionDuration: `500ms`,
    transitionTiming: `ease-in`,
    transitionDelay: 0,
    padding: "8px",
  }
  
  const transStyle = {...itemStyle};
  transStyle.color = "#d9b310";

  return(
    props.cartItems ?
    <li style={itemStyle} onClick={(e) => { props.unRender() }}> 
      {props.cartItems.title}
    </li>
    : <li style={itemStyle} onClick={(e) => { props.unRender(), props.selectAdventure(props.adventure.id, props.adventure.catagory /* sic */) }}> 
      {props.adventure.title}
    </li>
  )
}

export default StaticNavEntry;