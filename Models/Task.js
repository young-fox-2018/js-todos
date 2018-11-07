
class Task {
    constructor(id, task) {
        this.id = id
        this.task = task
        this.status = false
        this.createdAt = new Date()
        this.updatedAt = 'null'
        this.tags = []
    }
}

module.exports = Task