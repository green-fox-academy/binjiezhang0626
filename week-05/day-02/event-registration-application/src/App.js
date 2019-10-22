import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      registration: []
    }
  }
  handleChange = event => {
    let { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    let newRegistration = [...this.state.registration]
    let { firstName, lastName, email } = this.state
    newRegistration.push({
      firstName: firstName,
      lastName: lastName,
      email: email
    })
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      registration: newRegistration
    })
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h1>Registration Form</h1>
        <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
        <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
        <input type="text" name="email" value={this.state.email} placeholder="Email Address" onChange={this.handleChange} />
        <br />
        <button>Submit</button>
        <ul className="registration">
          {this.state.registration.map((user, index) => (
            <li key={index}>
              <p>{user.firstName} {user.lastName} {user.email}</p>
            </li>
          ))}
        </ul>

      </form>
    );
  }

}

export default App;
