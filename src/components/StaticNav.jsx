import React from 'react';
import {data} from '../../mockdata.js'
import StaticNavHeader from './StaticNavHeader.jsx';

const navStyle = {
  display: "flex",
  backgroundColor: "#242121",
  width: "100%",
  height: "2%",
  margin: "0 auto",
  padding: "30px"
}

class StaticNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderDD: false
    }
  }

  render() {
    return(
      <header style={navStyle}>
      {console.log(this.props)}
        {this.props.categories.length 
        ? this.props.categories.map((entry, index) => (
            <StaticNavHeader 
              key={entry.id}
              category={entry.catagory} // sic.
              {...this.props}
          /* What if we passed down a 'permission' prop?
          If null, don't render the DD menu, if anything else, render it.
          Could it be an object here with keys equal to IDs of the header buttons? */
            />
          ))
        : null }
      </header>
    )
  }
}

export default StaticNav;

{/* <a onClick={() => (console.log(data.events), props.populate(data))}>INSERT!</a> */}