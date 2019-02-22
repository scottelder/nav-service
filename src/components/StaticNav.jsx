import React from 'react';
import {data} from '../../mockdata.js'
import StaticNavHeader from './StaticNavHeader.jsx';
import ShoppingCart from './ShoppingCart.jsx'

const navStyle = {
  display: "flex",
  backgroundColor: "#242121",
  width: "100%",
  height: "2%",
  margin: "0 auto",
  padding: "30px"
}
const cartStyle = {
  height: '36px',
  width: '32px',
  flexGrow: 2,
  color: "#f6f5f3",
}
const fullCartStyle = {...cartStyle}
fullCartStyle.color = "#d9b310";

class StaticNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      renderFlip : false,
      cartCount: 0,
      cartStyle: this.cartCount ? fullCartStyle : cartStyle, // This is a good line to look at for bugs, especially the evaluation.
    }
  }
  // Methods:
  unRender() {
    this.setState({renderFlip: !this.state.renderFlip})
  }
  componentDidMount() {
    window.addEventListener('addToCart', () => {
      this.setState({cartCount: this.state.cartCount++})
    })
    window.addEventListener('removeFromCart', () => {
      this.setState({cartCount: this.state.cartCount--})
    })
  }
  render() {
   return (
      <header style={navStyle}>
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
        <ShoppingCart testProp={'the word Prop'} cartStyle={this.state.cartStyle} />
      </header>
    )
  }
}

export default StaticNav;

{/* <a onClick={() => (console.log(data.events), props.populate(data))}>INSERT!</a> */}