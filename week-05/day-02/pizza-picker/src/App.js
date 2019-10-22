import React, { Component } from 'react';
import './App.css';
const initState = {
  base: "",
  topping: [],
  cutState: "",
  comments: ""

}
class App extends Component {
  constructor() {
    super()
    this.state = initState
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Pizza Picker</h1>
        <form>
          <fieldset>
            <legend>Base</legend>
            <label htmlFor="base">
              <select name="base"
                id="base"
                value={this.state.base}
              >
                <option value="7">7 inch</option>
                <option value="9">9 inch</option>
                <option value="12">12 inch</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <legend>Toppings</legend>
            <label>Beef
            <input
                type="checkbox"
                name="toppings"
                value="beef"
              // checked={this.state.toppings.includes('beef')}
              // onChange={this.handleChange}
              />
            </label>
            <br />
            <label>Sausage
            <input
                type="checkbox"
                name="toppings"
                value="sausage"
              // checked={this.state.toppings.includes('sausage')}
              // onChange={this.handleChange}
              />
            </label>
            <br />
            <label>Chicken
            <input
                type="checkbox"
                name="toppings"
                value="chicken"
              // checked={this.state.toppings.includes('ham')}
              // onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Cut or not</legend>
            <label htmlFor="cut">
              <input
                type="radio"
                name="cut"
                value="yes"
              />Yes
              <br />
              <input
                type="radio"
                name="cut"
                value="no"
              />No
            </label>
          </fieldset>
          <fieldset>
            <legend>Additional comment</legend>
            <textarea></textarea>
          </fieldset>

        </form>

      </div>
    );
  }

}

export default App;
