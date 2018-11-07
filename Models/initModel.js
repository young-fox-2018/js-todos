const fs = require("fs")
const file = fs.readFileSync("/home/toni/Documents/HacktivPhase1/WEEK2/Day3/js-todos/data.json","utf8")
let dataParse = JSON.parse(file)

class Model{
    static list(){
        // console.log(file)
        // console.log("========")
        // console.log(dataParse)
        // console.log("--------")
        let arrayDataString = []
        
        for( let i = 0; i < dataParse.length; i++){
            arrayDataString.push(dataParse[i].task);
        }

        return arrayDataString
    }
    
    static add(addList){
        // console.log("////",addList[0])
        let data = dataParse
        let obj = {
            "task": addList[0]
        }
        data.push(obj)
        data = JSON.stringify(data, null, 2)
        // console.log(data)
        fs.writeFileSync("./data.json",data)
    }

    static findById(id){
        for( let i = 0; i < dataParse.length; i++){
            if( id == i+1){
                return (`${id}. ${dataParse[i].task}`)
            }
        }
        return "data tidak ditemukan"
    }

    static delete(id){
        let data = dataParse
        let dataDeleted = ""
        for( let i = 0; i < dataParse.length; i++){
            if( id == i+1){
                dataDeleted = data[i].task
                data.splice(i,1)
            }
        }
        data = JSON.stringify(data, null, 2)
        fs.writeFileSync("./data.json",data)
        return dataDeleted
    }

}

module.exports = Model