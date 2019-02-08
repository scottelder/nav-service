import React from 'react';
import ReactDOM from 'react-dom';
import StaticNav from './components/StaticNav.jsx';
import Axios from 'axios';
import BrowserRouter from 'react-router-dom'; //used to route to different compononents without refresh -- stretch add

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elements: ['air', 'earth', 'fire', 'water'],
      biomes: [],
      adventures: []
    }
  }
  populate(records) {
    Axios.post('/populate')
    .then(() => console.log('Successfully populated database'))
    .catch(() => console.log('Failed to populated database'));
    //add this method as a prop to <StaticNav /> if you want to reseed the database
  }
  render(){
    document.body.style.margin = "0";
    const pageStyle = {
      overflow: "hidden",
      margin: 0,
    };
    return(
      <div style={pageStyle}>
        <StaticNav 
          adventures={this.state.adventures} 
          elements={this.state.elements} 
          biomes={this.state.biomes} 
        />
        I am a React App. Have fun!
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))