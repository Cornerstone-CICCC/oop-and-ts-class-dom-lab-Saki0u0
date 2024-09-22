export class TodoContext {
  static id = 1

  constructor() {
    this.todos = []
    this.listeners = []
  }

  addTask(task) {
    this.todos.push({
      id: TodoContext.id++,
      description: task,
      completed: false
    });
    console.log(this.todos)
    this.notifyListeners()
  }

  
  complete(taskId) {
    const task = this.todos.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed; 
      this.notifyListeners(); 
    }
  }

  delete(taskId) {
    this.todos = this.todos.filter(t => t.id !== taskId);
    this.notifyListeners(); 
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.todos))
  }

  
}