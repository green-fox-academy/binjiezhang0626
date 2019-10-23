import React, { Component } from 'react';
import './App.css';
const initState = {
  base: "",
  toppings: [],
  cutState: "",
  comments: ""
}
class App extends Component {
  constructor() {
    super()
    this.state = initState
  }

  handleChange = event => {
    const target = event.target
    if (target.type === "checkbox") {
      let Toppings = this.state.toppings
      let topping = target.id
      if (Toppings.includes(topping)) {
        this.setState({
          toppings: Toppings.filter(top => top !== topping)
        })
      } else {
        this.setState({
          toppings: [...Toppings, topping]
        })
      }
    } else {
      const { name, value } = target
      this.setState({
        [name]: value
      })
    }
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.setState(initState)
  }
  render() {
    return (
      <div className="App">
        <h1>Pizza Picker</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Base</legend>
            <label htmlFor="base">
              <select name="base"
                id="base"
                value={this.state.base}
                onChange={this.handleChange}
              >
                <option>select</option>
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
                id="beef"
                checked={this.state.toppings.includes('beef')}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>Sausage
            <input
                type="checkbox"
                name="toppings"
                id="sausage"
                checked={this.state.toppings.includes('sausage')}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <label>Chicken
            <input
                type="checkbox"
                name="toppings"
                id="chicken"
                checked={this.state.toppings.includes('chicken')}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Cut or not</legend>
            <label>
              <input
                type="radio"
                name="cutState"
                value="yes"
                checked={this.state.cutState === "yes"}
                onChange={this.handleChange}
              />Yes
              <br />
              <input
                type="radio"
                name="cutState"
                value="no"
                checked={this.state.cutState === "no"}
                onChange={this.handleChange}
              />No
            </label>
          </fieldset>
          <fieldset>
            <legend>Additional comment</legend>
            <textarea
              name="comments"
              id="comments"
              value={this.state.comments}
              onChange={this.handleChange}
            ></textarea>
          </fieldset>
          <button>Order Now</button>
        </form>
      </div>
    );
  }

}

export default App;
