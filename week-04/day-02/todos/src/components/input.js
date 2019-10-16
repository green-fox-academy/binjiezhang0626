import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = () => {
        let input = document.querySelector('input').value
        if(input.length > 3) {
          this.props.addTodo(input);
          document.querySelector('input').value = '';
        } else{
          alert("The todo's title needs to be at least 3 character!")
        }
      }

    render() {
        return (
            <div>
                <input class="input" type="text" placeholder="todo things"></input>
                <button class="button-text" type="submit" onClick={this.handleInput}>Add</button>
            </div>
        )
    }
}

export default Input;