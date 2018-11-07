const fs = require('fs')
const dataPath = "/home/patriagani/hacktiv8/github/phase1/week2/day3/js-todos/data.json"

class Model {
  static readFile(options) {
    let data = fs.readFileSync(dataPath, "utf8")
    return JSON.parse(data)
  }

  static writeFile(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data))
  }

  static list(options) {
    let result = ""
    let data = Model.readFile()
    if (options === "dsc") {
      data.reverse()
    }
    for (let i = 0; i < data.length; i++) {
      result = result + `${data[i].id}. ${data[i].status} ${data[i].task} \n`
    }
    return result
  }

  static add(options) {
    let data = Model.readFile()
    let dataObj = {
      id:data.length+1,
      task: options,
      status: "[ ]",
      date: new Date,
      complete: false,
      updatedate: "",
      tags: []
    }
    data.push(dataObj)
    Model.writeFile(data)
    let result = `Added ${options} to your TODO list`
    return result
  }

  static findById(options) {
    let data = Model.readFile()
    for (let i = 0; i < data.length; i++) {
      if (options === data[i].id) {
        return `${data[i].id}. ${data[i].status} ${data[i].task}`
      }
    }
  }

  static delete(options) {
    let data = Model.readFile()
    let result = `Deleted "${data[options-1].task}" from your TODO list`
    data.splice(options-1,1)
    Model.writeFile(data)
    return result
  }

  static complete(options) {
    let result = ""
    let data = Model.readFile()
    for (let i = 0; i < data.length; i++) {
      if (options === i+1) {
        data[i].complete = true
        data[i].status = "[X]"
        data[i].updatedate = new Date
      }
    }
    Model.writeFile(data)
    for (let j = 0; j < data.length; j++) {
      result = result + `${data[j].id}. ${data[j].status} ${data[j].task} \n`
    }
    return result
  }

  static uncomplete(options) {
    let result = ""
    let data = Model.readFile()
    for (let i = 0; i < data.length; i++) {
      if (options === i+1) {
        data[i].complete = false
        data[i].status = "[ ]"
        data[i].updatedate = new Date
      }
    }
    Model.writeFile(data)
    for (let j = 0; j < data.length; j++) {
      result = result + `${data[j].id}. ${data[j].status} ${data[j].task} \n`
    }
    return result
  }

  static completed(options) {
    let result = ""
    let data = Model.readFile()
    let dataCompleted = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].complete === true) {
        dataCompleted.push(data[i])
      }
    }
    if (options === "desc") {
      dataCompleted.sort(function(a,b) {return (a.updatedate > b.updatedate) ? -1 : ((b.updatedate > a.updatedate) ? 1 : 0);} );
    }
    else {
      dataCompleted.sort(function(a,b) {return (a.updatedate > b.updatedate) ? 1 : ((b.updatedate > a.updatedate) ? -1 : 0);} );
    }
    for (let j = 0; j < dataCompleted.length; j++) {
      result = result + `${dataCompleted[j].id}. ${dataCompleted[j].status} ${dataCompleted[j].task} \n`
    }
    return result
  }

  static tag(options) {
    let result = ""
    let index = Number(options[0])
    let data = Model.readFile()
    let tags = ""
    for (let i = 0; i < data.length; i++) {
      if (index === i+1) {
        for (let j = 1; j < options.length; j++) {
          data[i].tags.push(options[j])
          tags = tags+ " "+options[j]
        }
        result = result + `Tagged task ${data[i].task} with tags:${tags}`
      }
    }
    Model.writeFile(data)
    return result
  }

  static filter(options) {
    let result = ""
    let dataTags = []
    let data = Model.readFile()
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data[i].tags.length; j++) {
        if (data[i].tags[j] === options) {
          dataTags.push(data[i])
        }
      }
    }
    for (let j = 0; j < dataTags.length; j++) {
      result = result + `${dataTags[j].id}. ${dataTags[j].status} ${dataTags[j].task} \n`
    }
    return result
  }
}
module.exports = Model