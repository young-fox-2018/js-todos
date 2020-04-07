const fs = require("fs")

class TodoApps {
    constructor(){
        this.id = null
        this.task = null
        this.status = false
        this.tags = []
        this.date = new Date()
    }

    static readFile() {
        let data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))
        // if ( option ) {
        //     let tasks = data.filter((datum) => {
        //         datum.status === true
        //     })
        // }
        return data
    }

    static writeFile(new_data) { // save
        fs.writeFileSync("./data.json", JSON.stringify(new_data, null, 4)) 
        // null, 4 biar file yg ke save nya punya tab sendiri 
    }

    static list() {
        let tasks =  TodoApps.readFile()
        let output = []
        output.push("Jadwal hari ini adalah:\n")
        tasks.forEach(task => {
            if (task.status == false) {
                output.push(`${task.id}. [ ] ${task.task}`)
            } else {
                output.push(`${task.id}. [x] ${task.task}`)
            }
        });
        return output
    }

    add(new_task) {
        this.task = new_task 
        let tasks = TodoApps.readFile()
        tasks.push({
            id: tasks.length + 1,
            task: this.task,
            status: this.status,
            tags: this.tags,
            date: this.date
        })
        TodoApps.writeFile(tasks)
        return `Added ${new_task} to your TODO list...`
    }

    static findById(id) {
        let tasks = TodoApps.readFile()
        let data = tasks.filter(task => {
            if (task.id == id) {
                return `${task.id}. ${task.task}`
            }
        });
        if (data.length > 0) {
            return `${data[0].id}. ${data[0].task}`
        } else {
            return []
        }    
    }

    static delete(id) {
        let tasks = TodoApps.readFile()

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id == id) {
                let temp = tasks[i].task
                tasks.splice(i, 1)
                TodoApps.writeFile(tasks)
                return `Delete "${temp}" from your TODO list...`
            }
        } return null
    }

    static complete(id) {
        let tasks = TodoApps.readFile()
        let found = false
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id == id) {
                tasks[i].status = true 
                found = true
            }
        }
        TodoApps.writeFile(tasks)
        if (found) {
            return `task ${id} has been completed`
        } else {
            return null
        }
    }

    static uncomplete(id) {
        let tasks = TodoApps.readFile()
        let found = false
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id == id) {
                tasks[i].status = false
                found = true
            }
        }
        TodoApps.writeFile(tasks)
        if (found) {
            return `task ${id} is not yet completed`
        } else {
            return null
        }
    }

    static sorted(field, options) { // option asc, desc
        let tasks = TodoApps.readFile()
        let fields = []
        tasks.forEach( task => {
            fields.push(task[field])
        })
        if (options == "asc") {
            return fields.sort()
        } else {
            return fields.sort().reverse()
        }
    }

    static listSortedBy(field, options) { 
        // mirip kyk list cuman di sort based on created date ;ascending kecil ke gede ;descending gede ke kecil
        // validasi jika field tidak ada, kalau options by default desc jadi kalau salah ataupun tidak ada ke desc
        if (field != "id" && field != "task" && field != "tags" && field != "date") {
            return null
        }
    
        let sortedField = TodoApps.sorted(field, options)
        let tasks =  TodoApps.readFile()
        let output = []
        output.push("Jadwal hari ini adalah:\n")
        for (let i = 0; i < sortedField.length; i++) {
            tasks.forEach(task => {
                if (task[field] == sortedField[i] && task.status == false) {
                    output.push(`${task.id}. [ ] ${task.task}`)
                } else if (task[field] == sortedField[i] && task.status == true) {
                    output.push(`${task.id}. [x] ${task.task}`)
                }  
            });
        }
        return output
    }

    static listCompleted(input) {
        let tasks =  TodoApps.readFile()
        let output = []; let state = null
        if (input == "complete") {
             state = true
             output.push("completed task are:")
        } else {
             state = false
             output.push("uncomplete task are:")
        }
        tasks.forEach(task => {
            if (task.status == state) {
                output.push(`${task.id} ${task.task}`)
            }
        });
        return output
    }

    static addTag(id, arr) {
        let tasks = TodoApps.readFile()

        tasks.forEach(task => {
            if (task.id == id) {
                for (let i = 0; i < arr.length; i++) {
                    let state = true
                    for (let j = 0; j < task.tags.length; j++) {
                        if (arr[i] == task.tags[j]) {
                            state = false
                        }
                    } 
                    if (state) task.tags.push(arr[i])
                }
            }
         });
         TodoApps.writeFile(tasks)
         return tasks
    }

    static filter(singleTag) {
        let tasks = TodoApps.readFile()
        let output = []
        tasks.forEach(task => {
            for (let i = 0; i < task.tags.length; i++) {
                if (task.tags[i] == singleTag) {
                    output.push(`${task.id}. ${task.task} [${task.tags}]`)
                }
            }
        });
        return output
    }
}
module.exports = TodoApps

// let task = new TodoApps()
// task.add("berenang")

//TodoApps.add("Tidur")
//TodoApps.findById(2)

//TodoApps.delete(8)

//TodoApps.complete(5)
//TodoApps.uncomplete(5)

//TodoApps.list()
//TodoApps.listCreated("asc")

//TodoApps.listCompleted("uncomplete")

//TodoApps.addTag(1, ["happy", "molly"])
//TodoApps.addTag(1, ["happy", "molly","olala"])

//TodoApps.filter("happy")

//TodoApps.sorted("id", "desc")

