import React, { Component } from 'react';
import './App.css';

const initState = {
  username: "",
  email: "",
  password: "",
}

class App extends Component {

  constructor() {
    super()
    this.state = initState
  }
  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  validate = () => {
    const { username, email, password } = this.state
    // let nameError = ""
    // let emailError = ""
    // let passwordError = ""
    // if (!this.state.username) {
    //   nameError = "Username must not be empty"
    // }
    // if (!this.state.email.includes('@')) {
    //   emailError = "Email address must contain '@' symbol"
    // }
    // if(!this.state.password.length >= 8) {
    //   passwordError = "Password must be at least 8 characters"
    // }
    if (!username || !email.includes('@') || password.length<8) {
      return false
    }
    return true
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.setState(initState)
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>User registration</h1>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChange} />
        <div>{this.state.nameError}</div>
        <br />
        <input
          type="email"
          name="email"
          value={this.state.email}
          placeholder="Email Address"
          onChange={this.handleChange} />
        <div>{this.state.emailError}</div>
        <br />
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChange} />
        <div>{this.state.passwordError}</div>
        <br />
        <button disabled={!this.validate()}>Submit</button>
      </form>
    );
  }
}

export default App;