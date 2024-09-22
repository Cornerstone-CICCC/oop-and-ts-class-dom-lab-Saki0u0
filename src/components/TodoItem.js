
import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleComplete() {
    this.props.todoContext.addItem(this.props.id)
  }

  handleDelete() {
    this.props.todoContext.deleteItem(this.props.id)
  }

  render() {
    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"

    const span = document.createElement('span');
    span.textContent = this.props.description;
    
    if (this.props.completed) {
      span.classList.add('completed');
    }


    const completeBtn = document.createElement('button')
      completeBtn.textContent =this.props.isComplete ? 'Undo' : 'Complete'
      completeBtn.addEventListener('click', this.handleComplete);

      const removeBtn = document.createElement('button')
      removeBtn.textContent = 'Remove'
      removeBtn.addEventListener('click', this.handleDelete);

    todoElement.appendChild(span);
    todoElement.appendChild(completeBtn)
    todoElement.appendChild(removeBtn)


    return todoElement;
  }
}