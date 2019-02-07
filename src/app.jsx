import React from 'react';
import ReactDOM from 'react-dom';
import StaticNav from './components/StaticNav.jsx';
import BrowserRouter from 'react-router-dom'; //used to route to different compononents without refresh -- stretch add

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      links: [],
    }
  }
  render(){
    document.body.style.margin = "0";
    const pageStyle = {
      overflow: "hidden",
      margin: 0,
    };
    return(
      <div style={pageStyle}>
        <StaticNav links={this.state.links}/>
        I am a React App. Have fun!
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))