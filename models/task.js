"use strict"

class Task {
    constructor(task) {
        this.task = task
        this.status = false
        this.createdAt = new Date()
        this.completedAt = "null"
        this.tags = ""
    }
}

module.exports = Task