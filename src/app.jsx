import React from 'react';
import ReactDOM from 'react-dom';
import StaticNav from './components/StaticNav.jsx';
import Axios from 'axios';
import Path from 'path';
import Router from 'react-router-dom'; //used to route to different compononents without refresh -- stretch add

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      adventures: [],
      showList: false,
      showEntry: false
    }
  }

  // Add this method as a prop to <StaticNav /> if you want to reseed the database
  // populate(records) {
  //   Axios.post('/populate', records)
  //   .then(() => console.log('Successfully populated database'))
  //   .catch(() => console.log('Failed to populated database'));
  // }
  // selectAdventure(target) {
  //   console.log(target);
  // }

  componentDidMount() {
    Axios.get('http://ec2-18-223-184-74.us-east-2.compute.amazonaws.com/headers')
      .then((res) => this.setState({ categories: res.data }) ) // <--------sic.
      .catch((err) => console.log(err));

    Axios.get('http://ec2-18-223-184-74.us-east-2.compute.amazonaws.com/adventures')
      .then((res) => this.setState({ adventures: res.data }) )
      .catch((err) => console.log(err))
  }

  toggleList() {
    this.state.showList ? this.setState({showList: false}) : this.setState({showList: true})
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
            {...this.state}
            // populate={this.populate}
            selectAdventure={this.selectAdventure.bind(this)}
            toggleList={this.toggleList.bind(this)}
        />
        I am a React App. Have fun!
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))