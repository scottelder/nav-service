import React from 'react';
import Thumbnail from './Thumbnail.jsx'
import StaticNavList from './StaticNavList.jsx';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderDD: false,
      adventures: []
    }
    this.divStyle = { 
      flexGrow: 1,  
      display: "flex",
      alignItems: "center", 
    }

  }
  componentDidUpdate(prevProps) {
    if (this.props.renderFlip !== prevProps.renderFlip) {
      this.setState({renderDD: false});
    }
  }

  render() {
    return (
      <div style={this.divStyle} onMouseEnter={() => {
        this.props.unRender()
        setTimeout(() => this.setState({renderDD: true}), 0)
      }}>
      {/* The following SVG came from https://fontawesome.com/ using their free license. */}
        <svg style={this.props.cartStyle} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
        </svg>
        <div>
          {this.state.renderDD 
          ? <StaticNavList adventures={this.props.adventures} cartItems={this.props.cartItems} />
          : null }
        </div>
      </div>
    )
  }
}


export default ShoppingCart;