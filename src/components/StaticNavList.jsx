import React from 'react';
import StaticListEntry from './StaticNavEntry.jsx'

const StaticNavList = (props) => {
  const listStyle = {
    position: "fixed",
    backgroundColor: "#242121",
    listStyle: "none",
    borderRadius: '8px',
    boxShadow: '0 3px 3px 0',
    //The following props aren't currently used.
    transitionProperty: `opacity`,
    transitionDuration: `200ms`,
    transitionTiming: `ease-in`,
    transitionDelay: 0,
  }

  return (
    <ul style={listStyle} onMouseLeave={() => { props.fadeListOut(), props.unGlow() } }>
    {props.cartItems.length 
      ? props.cartItems.map((item, index) => 
      <StaticListEntry 
        key={index} 
        adventure={item} 
        selectAdventure={props.selectAdventure}
        unRender={props.unRender}
      />)
      : props.adventures.length  
        ? props.adventures.map((adventure, index) => 
          <StaticListEntry 
            key={index} 
            adventure={adventure} 
            selectAdventure={props.selectAdventure}
            unRender={props.unRender}
          />)
        : null }
    </ul>
  )
}

export default StaticNavList;

// onMouseLeave={() => props.fadeListOut()}