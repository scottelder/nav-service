import React from 'react';
import ReactDOM from 'react-dom';
import StaticNav from './components/StaticNav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      someState: ''
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
        <StaticNav />
        I am a React App. Have fun!
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))