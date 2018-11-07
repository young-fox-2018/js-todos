const fs = require("fs")

class Model{
    
    static readFile() {
        const file = fs.readFileSync("/home/toni/Documents/HacktivPhase1/WEEK2/Day3/js-todos/data.json","utf8")
        const dataParse = JSON.parse(file)
        return dataParse
    }
    
    static writeFile(data){
        data = JSON.stringify(data, null, 2)
        fs.writeFileSync("./data.json",data)
    }

    static add(addList){
        let data = Model.readFile()
        let obj = {
            "task": addList[0],
            "completed": "[ ]",
            "create date": new Date(),
            "update date": new Date()
        }
        data.push(obj)
        Model.writeFile(data)
    }

    static delete(id){
        let data = Model.readFile()
        let dataDeleted = ""

        for( let i = 0; i < data.length; i++){
            if( id == i+1 ){
                dataDeleted = data[i].task
                data.splice(i,1)
            }
        }

        Model.writeFile(data)
        return dataDeleted
    }

    static findById(id){
        let data = this.readFile()
        for( let i = 0; i < data.length; i++){
            if( id == i+1 ){
                return [data[i]]
            }
        }
        return null
    }

    static complete(id){
        let data = Model.readFile()
        for( let i = 0; i < data.length; i++){
            if( id == i+1 ){
                data[i].completed = "[x]"
            }
        }

        Model.writeFile(data)
    }

    static uncompleted(id){
        let data = dataParse

        for( let i = 0; i < data.length; i++){
            if( id == i+1 ){
                data[i].completed = "[ ]"
            }
        }

        Model.writeFile(data)
    }

}

module.exports = Model