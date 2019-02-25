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
  padding: "30px 0px"
}
const cartStyle = {
  height: '36px',
  width: '32px',
  color: "#f6f5f3",
}
const fullCartStyle = {...cartStyle}
fullCartStyle.color = "#f45800";

const gutsyStyle = {
  flexGrow: 1,
  fontSize: '36px',
  color: '#f45800',
  paddingLeft: "8px",
  fontFamily: "'Sacramento', light"
}

class StaticNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      renderFlip : false,
      cartCount: 0,
      cartItems: {},
      cartStyle: cartStyle,
    }
  }
  // Methods:
  unRender() {
    this.setState({renderFlip: !this.state.renderFlip})
  }
  cartRender() {
    this.setState({ rendercart: !this.state.renderCart })
  }
  componentDidMount() {
    //Add to Cart
    window.addEventListener('addToCart', (event) => {
      //event.detail is the item's ID
      this.setState({
        cartCount: this.state.cartCount + 1, 
      })
      this.state.cartItems[event.detail] === undefined
      ? (this.state.cartItems[event.detail] = {}, this.state.cartItems[event.detail].count = 0)  // <----- start here!
      : this.state.cartItems[event.detail].count++
      setTimeout(() => this.setState({cartStyle: this.state.cartCount > 0 ? fullCartStyle : cartStyle}), 0)
    }, false)
    cartItems: 

    // There is no removeFromCart button/function.
    window.addEventListener('removeFromCart', (event) => {
      this.setState({cartCount: this.state.cartCount - 1})
      setTimeout(() => this.setState({cartStyle: this.state.cartCount > 0 ? fullCartStyle : cartStyle}), 0)
    }, false)
  }
  render() {
   return (
      <header style={navStyle}>
      <div style={gutsyStyle}>Gutsy</div>
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
        <ShoppingCart 
          cartItems={this.state.cartItems} 
          cartStyle={this.state.cartStyle} 
          renderFlip={this.state.renderFlip}
          adventures={this.props.adventures}
          unRender={this.unRender.bind(this)}
        />
      </header>
    )
  }
}

export default StaticNav;

{/* <a onClick={() => (console.log(data.events), props.populate(data))}>INSERT!</a> */}