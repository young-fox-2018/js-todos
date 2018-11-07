// const Controller = require('./Controller')

const fs = require('fs')
const dataPath = '/Users/admin/Documents/Phase 1/Week 2/js-todos/data.json'

class Model {
    static readData() {
        let data = fs.readFileSync(dataPath, 'utf8')
        return JSON.parse(data)
    }

    static add(task) {
        let data = Model.readData()
        let obj = {
            'id' : data.length + 1,
            'task' : task,
            'status' : 'uncomplete'
        }
        data.push(obj)
        Model.save(JSON.stringify(data, null, 2))
    }

    static save(task) {
        fs.writeFileSync(dataPath, task, 'utf8')
    }

    static findById(task) {
        var number = Number(task)
        let data = Model.readData()
        let result = ''
        for(let i = 0; i < data.length; i++){
            if(i+1 === number){
                result += `${i+1} ${data[i].task}`
            }
        }
        return result
    }

    static delete(task) {
        let data = Model.readData()
        let result = ''
        for (let i = 1; i < data.length; i++) {
            if(data[i].id === Number(task) || data[i].task === task){
                result += data[i].task
                data.splice(i,1)
            }
        }
        for (let j = 0; j < data.length; j++) {
            data[j].id = j+1
        }

        Model.save(JSON.stringify(data, null , 2))
        return result 
    }

    static complete(task){
        let data = Model.readData()
    
        for (let i = 0; i < data.length; i++) {
          if(data[i].id === Number(task)){
            data[i].status = "complete"
          }    
        }
        Model.save(JSON.stringify(data, null , 2))
    }

    static uncomplete(task){
        let data = Model.readData()

        for (let i = 0; i < data.length; i++) {
          if(data[i].id === Number(task)){
            data[i].status = "uncomplete"
          }    
        }
        Model.save(JSON.stringify(data, null , 2))
    }
}

module.exports = Model