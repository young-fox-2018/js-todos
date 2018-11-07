const fs = require('fs')

class Todo {

    constructor(id, name, status = ' ', createdAt) {
        this.id = id
        this.name = name
        this.status = status
        this.tag = []
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    static readFile() {
        let data = fs.readFileSync('./data.json')
        data = JSON.parse(data)
        return data
    }
    static writeFile(data) {
        data = JSON.stringify(data, null, 4)
        fs.writeFileSync('./data.json', data)
    }
    static list() {
        let output = ''
        let data = this.readFile()
        data = data.sort()
        for (let i = 0; i < data.length; i++) {
            output += `${data[i].id}. [${data[i].status}] ${data[i].name}`
            if (i !== data.length - 1) {
                output += '\n'
            }
        }
        return output


    }
    static findById(id) {
        let data = this.readFile()
        let output = null
        data.forEach((obj, index) => {
            if (obj.id === Number(id)) {
                output = obj
            }
        })
        
        return output
    }
    static sort(options, sort) {
        let data = this.readFile()
        let output = ''
        if (options === 'completed') {
            data = data.filter(datum => datum.status === 'x')
        }
        if (sort === 'desc') {
            data = data.sort((a, b) => { return a.createdAt < b.createdAt })
        }
        data.forEach((datum, index) => {
            output += `${datum.id}. [${datum.status}] ${datum.name}`
            if (index !== data.length - 1) {
                output += '\n'
            }
        });
        return output
    }
    add() {
        let data = Todo.readFile()
        this.id = data.length
        this.name = this.name.join(' ')
        let obj = {
            id : this.id,
            name : this.name,
            status : this.status,
            createdAt : this.createdAt,
            updatedAt : this.updatedAt
        }
        data.push(obj)
        Todo.writeFile(data)
        return  `Added ${this.name} to your TODO list..`
    }
    
    delete() {
        let data = Todo.readFile()
        let output = ''
        data.forEach((obj, index) => {
            if (obj.id === Number(this.id)) {
                output += obj.name
                data.splice(Number(this.id), 1)
            }
        })
        Todo.writeFile(data)
        return output
    }
    complete() {
        let data = Todo.readFile()
        data.forEach((item) => {
            if (item.id === Number(this.id)) {
                item.status = 'x'
                item.updatedAt = new Date()
            }
        });
        Todo.writeFile(data)
    }
    uncomplete() {
        let data = Todo.readFile()
        data.forEach((item) => {
            if (item.id === Number(this.id)) {
                item.status = ' '
            }
        });
        Todo.writeFile(data)
    }
}

module.exports = Todo