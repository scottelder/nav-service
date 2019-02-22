import React from 'react';
import {data} from '../../mockdata.js'
import StaticNavHeader from './StaticNavHeader.jsx';

class StaticNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      renderFlip : false
    }
    // Stylings:
    this.navStyle = {
      display: "flex",
      backgroundColor: "#242121",
      width: "100%",
      height: "2%",
      margin: "0 auto",
      padding: "30px"
    }
    this.headingsStyle = {
      flexGrow: `${this.props.categories.length}`
    }
    this.cartStyle = {
      flexGrow: 1,
      color: "white",
      fontFamily: `BlinkMacSystemFont, Roboto, Droid Sans, Segoe UI, Helvetica, Arial, sans-serif`,
      fontSize: "22px",
      cursor: "pointer",
    }
  }

  // Methods:
  unRender() {
    this.setState({renderFlip: !this.state.renderFlip})
  }
  render() {
   return (
      <header style={this.navStyle}>
          {this.props.categories.length 
          ? this.props.categories.map((entry, index) => 
              <StaticNavHeader
                renderFlip={this.state.renderFlip}
                unRender={this.unRender.bind(this)} 
                key={entry.id}
                category={entry.catagory} // sic.
                {...this.props} 
              />
            )
          : null }
        <div style={this.cartStyle}>Shopping Cart</div>
      </header>
    )
  }
}

export default StaticNav;

{/* <a onClick={() => (console.log(data.events), props.populate(data))}>INSERT!</a> */}