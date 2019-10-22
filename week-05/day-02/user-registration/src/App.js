import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }
  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <form className="form">
        <h1>User registration</h1>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange} />
        <br />
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Email Address"
          onChange={this.handleChange} />
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange} />
        <br />
        <button>Submit</button>
      </form>
    );

  }
}

export default App;