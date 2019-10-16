import React from 'react';
import TodoItem from './todoItem'
import Input from './input'

class Todo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {todos: []}
        this.addTodoFromInput = this.addTodoFromInput.bind(this)
        this.completeTodo = this.completeTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.switchButtonOnClick = this.switchButtonOnClick.bind(this)
        console.log(props)
    }

    addTodoFromInput(input){
        this.setState({
            todos: [...this.state.todos, {name: input, completed: false}]
        })
    }
    deleteTodo(name){
        this.setState({todos: this.state.todos.filter((todo) => todo.name !== name)})
    }
    completeTodo(name, checked){
        this.state.todos.find((todo) => todo.name === name)
        let tempTodos = this.state.todos
        tempTodos.find((todo) => todo.name === name).completed = checked
        this.setState(tempTodos)
    }
    switchButtonOnClick() {
        this.props.history.push('/theme')
    }

    render(){
        return(
            <div className="todos">
                <div className="heading">
                    TODOS
                </div>
                <div className="input">
                    <Input addTodo={this.addTodoFromInput}/>
                </div>
                <div className="details">
                    {this.state.todos.map(todo => <TodoItem item={todo} delete={this.deleteTodo} complete={this.completeTodo}/>)}
                </div>
                <button className="switchBtn" onClick={this.switchButtonOnClick}>THEME SWITCHER</button>
            </div>
        )
    }
}

export default Todo;