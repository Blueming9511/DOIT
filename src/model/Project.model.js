import { generateID } from './Task.model.js'
export class Project {
  constructor (id = generateID, name) {
    this.id = id
    this.tasks = []
    this.name = name
  }

  addTasktoProject (task) {
    this.tasks.push(task)
  }

  editTask (task, newTask) {
    const index = this.tasks.indexOf(task)
    if (index > -1) {
      //splice (start, The number of elements to remove from the start index, elements to add to array  )
      this.tasks.splice(index, 1, newTask)
    }
  }

  editProject (newName) {
    this.name = newName
  }

  deleteTask (task) {
    const index = this.tasks.indexOf(task)
    if (index > -1) {
      this.tasks.splice(index, 1)
    }
  }

  static fromJSON (json) {
    const project = new Project(json.name, json.id)
    project.tasks = json.tasks.map(taskData => Task.fromJSON(taskData))
    return project
  }
}
