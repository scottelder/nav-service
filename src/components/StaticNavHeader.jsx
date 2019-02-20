import React from 'react';
import StaticNavList from './StaticNavList.jsx'

// Style choices below
const flexStyle = {
  flexGrow : "1"
}

const buttStyle = {
  flexGrow: "1",
  color: "white",
  fontFamily: `"BlinkMacSystemFont", "Roboto", "Droid Sans", "Segoe UI", "Helvetica", Arial, sans-serif`,
  fontSize: "22px",
  cursor: "pointer",
  // transition: `color 195ms ease-in 0s`,
  transitionProperty: `color`,
  transitionDuration: `200ms`,
  transitionTiming: `ease-in`,
  transitionDelay: 0
}

const transStyle = {...buttStyle};
transStyle.color = "#d9b310";

class StaticNavHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderDD: false,
      style: buttStyle,
      adventures: []
    }
  }
  // This function takes the adventures passed in from the Axios call
  // in the App component and arranges them by category.
  categorizeAdventures() {
    const categorizedAdventures = [];
    this.props.adventures.forEach((adventure) => {
      if (adventure.catagory === this.props.category) { //sic
        categorizedAdventures.push(adventure);
      }
    })
    this.setState({adventures: categorizedAdventures})
  };
  // This function is SUPPOSED TO reduce opacity of the DD menu over
  // time and then stop rendering them once the opacity reaches 0.
  fadeListOut() {

  };

  componentDidMount() {
    // This invocation is delayed to give the asynchronous call to the
    // database a chance to complete before running itself.
    setTimeout(this.categorizeAdventures.bind(this), 250)
  };

  render() {
    return(
      <div style={flexStyle}>
        <a style={this.state.style}
          onMouseEnter={() => { this.setState({renderDD: !this.state.renderDD, style: transStyle}) }}
          onMouseLeave={() => { this.setState({style: buttStyle})}}
        >
        {this.props.category}
        </a>
        <div>
          { this.state.renderDD 
          ? <StaticNavList 
            fadeListOut={this.fadeListOut.bind(this)} 
            adventures={this.state.adventures} 
            selectAdventure={this.props.selectAdventure} />  
          : null }
        </div> 
      </div>
    ) 
  }
}
export default StaticNavHeader;