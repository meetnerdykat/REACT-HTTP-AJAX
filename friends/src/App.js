import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Friends from './components/friends/Friends';

class App extends Component {
  // ADD STATE
  state = {
    friends: [],
    loading: false
  };
  // REFACTORED GET REQUEST
  async componentDidMount() {
    // manipulate the state, specifically the loading prop
    this.setState({ loading: true });
    // make a GET request to the api
    const response = await axios.get('http://localhost:5000/friends');
    // after making the request and getting the response, I want to reset my loading state
    // console.log(response.data);
    this.setState({ friends: response.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-5">
          <Friends loading={this.state.loading} friends={this.state.friends} />
        </div>
      </div>
    );
  }
}

export default App;

// npm install --save axios react-router-dom
// created components folder
// imported axios to App.js
// used componentDidMount life cycle method
// made a GET request to the server for the data by way of axios.get
// componentDidMount() {
//   // make a GET request to the api
//   axios
//     .get('http://localhost:5000/friends')
//     .then(response => console.log(response.data));
// }
// refactored GET request to use async await instead of promises
// created state in App.js
