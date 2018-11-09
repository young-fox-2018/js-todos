const fs = require('fs')

class Model {
  static readFile() {
    let data = fs.readFileSync('/Users/zhang/phase1/p1w2/js-todos/data.json' , 'utf8')
    return JSON.parse(data)
  }

  static add(task) {
    let data = this.readFile()
    let result = {
      "id": data.length+1,
      "task": task,
      "status": "uncomplete",
      "created": new Date()}
    data.push(result)
    this.save(JSON.stringify(data, null,1))

  }

  static save(task){
    fs.writeFileSync('/Users/zhang/phase1/p1w2/js-todos/data.json',task, 'utf8' )

  }

  static findById(task){
    var number = Number(task)
    let data = Model.readFile()
    let result = ''
    for (let i = 0; i < data.length; i++) {
      if(i+1 === number) {
        result += `${i+1} ${data[i].task}`
      }
    }
    return result
  }

  static delete(task){
    let data = Model.readFile()
    let result = ''
    
    for (let i = 0; i < data.length; i++) {
      if(data[i].id === Number(task)){
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
    let data = Model.readFile()

    for (let i = 0; i < data.length; i++) {
      if(data[i].id === Number(task)){
        data[i].status = "complete"
      }    
    }
    Model.save(JSON.stringify(data, null , 2))

  }

  static uncomplete(task){
    let data = Model.readFile()

    for (let i = 0; i < data.length; i++) {
      if(data[i].id === Number(task)){
        data[i].status = "uncomplete"
      }    
    }
    Model.save(JSON.stringify(data, null , 2))

  }
  
  static sortDesc(data) {

    data.sort(function(a, b) {
      var dataA = new Date(a.created), dataB = new Date(b.created);
      return dataB - dataA;
    });
    return data
  } 

  static getByComplete() {
    let data = Model.readFile()
    let result = []
    for (let i = 0; i < data.length; i++) {
      if(data[i].status == 'complete'){
        result.push(data[i])
      }    
    }
    return result
  }

  static tag(task) {
    let id = task[0]
    let comment = task.slice(1)
    let data = Model.readFile()

    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i].tag = [comment]
      }
    }
    this.save(JSON.stringify(data, null,1))
    return 'Tagged task '
  }
}

module.exports = Model