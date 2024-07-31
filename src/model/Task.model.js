export class task {
  constructor (
    id = this.generateId,
    title,
    description,
    dueDate,
    prioriry,
    project,
    isCompleted = false
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.prioriry = prioriry
    this.project = project
    this.isCompleted = isCompleted
  }

  toggleCompleted () {
    this.completed = !this.completed
  }
  addTodo () {}

  generateId () {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    )
  }

  static fromJson (json) {
    const task = new task(
      json.id,
      json.title,
      json.description,
      json.dueDate,
      json.prioriry,
      json.project
    )
    task.completed = json.completed
    return task
  }
}
