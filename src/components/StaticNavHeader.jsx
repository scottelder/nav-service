import React from 'react';
import StaticNavList from './StaticNavList.jsx'

class StaticNavHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderDD: false
    }
  }

  render() {
    const buttStyle = {
      color: "white",
      padding: "2.5%",
      fontFamily: `"BlinkMacSystemFont", "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif`,
      // fontFamily: `"Roboto"`,
      fontSize: "22px",
      cursor: "pointer"
    }
    return(
        <a style={buttStyle} 
        onMouseEnter={() => this.setState({renderDD: true})}
        onMouseLeave={() => this.setState({renderDD: false})}
        >
          {this.props.element}
          {this.state.renderDD ? <StaticNavList biomes={this.props.biomes} />  : null}
        </a>
    ) 
  }
}

export default StaticNavHeader;