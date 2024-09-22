import { Component } from "../common/Component.js";
import { TodoContext } from "../contexts/TodoContext.js";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask() {
    const description = this.todoInput.value.trim();
    if (description) {
      this.props.todoContext.addTask(description)
      this.todoInput.value = ''; 
    }
  }

  render() {
    console.log(this.props.todoContext.todos)
    const addElement = document.createElement('div');
    addElement.className = "add-todo";
    addElement.innerHTML = `
      <input type="text" id="todo-input" placeholder="Enter task details...">
      <button id="todo-add-btn">Add To Do</button>
    `;


    this.todoInput = addElement.querySelector('#todo-input');
    this.addTodoButton = addElement.querySelector('#todo-add-btn');

    if (this.addTodoButton) {
      this.addTodoButton.addEventListener('click', this.handleAddTask);
    } else {
      console.error('Add Todo Button not found');
    }

    return addElement;
  }
}
