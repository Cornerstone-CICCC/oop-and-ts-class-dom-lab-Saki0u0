import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = { todos: [] }
    this.updateTodos = this.updateTodos.bind(this)
    this.props.todoContext.subscribe(this.updateTodos)
    this.todoListElement = null
  }

  updateTodos(todos) { 
    this.state.todos = todos
    
    // Clear the current ul
    this.todoListElement.innerHTML = ''

    // Iterate over cart items
    const todoItems = this.state.todos.map(todo => `<li>${todo.description}</li>`).join('')
    this.todoListElement.innerHTML = todoItems
  }

  render() {
    const todosElement = document.createElement('div')
    todosElement.innerHTML = `
      <ul></ul>
    `
    
    this.state.todos.forEach(todo => {
      const todoItem = new TodoItem({
        todo,
        description: todo.description,
        completed: todo.completed,
        todoContext: this.props.todoContext,
        id: todo.id,
      })
      TodoList.appendChild(todoItem.render())
    })

    this.todoListElement = todosElement.querySelector('ul')
    return todosElement;
  }
}