class TaskObject {
    constructor(id,task) {
        this.id = id
        this.mark = false
        this.task = task
        this.createdAt = new Date()
        this.completedAt= null
    }
}

// let obj = new TaskObject(1,"main")
// obj.generateDate()

module.exports = TaskObject