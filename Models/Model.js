const fs = require('fs')
class Model{
    static readFile(){
        let data = fs.readFileSync("./data.json","utf8")
        return JSON.parse(data)
    }
    static addData(task){
        let data = Model.readFile()
        let obj = { 
            "id": data.length+1 ,
            "task": task,
            "status": "uncomplete",
            "created": new Date()
        }
        data.push(obj)
        Model.Save(JSON.stringify(data,null,2))
    }
    static Save(data){
        fs.writeFileSync("./data.json",data,"utf8")
    }
    static findById(task){
        let data = Model.readFile()
        let str = ""
        for(var i = 0 ; i < data.length; i++){
           if( i+1 === Number(task)){
               str += `${i+1}. ${data[i].task}`
           }
            
        }
        return str
    }
    static delete(task){
        let data = Model.readFile()
        let result = ""
        for(let i = 0 ; i < data.length; i++){
            if(data[i].id === Number(task)){
                result += data[i].task
                 data.splice(i,1)
                }
            }
        for(let j = 0 ; j < data.length ; j++){
            data[j].id = j+1
         }
        Model.Save(JSON.stringify(data,null,2))
        return result

    }
    static complete(task){
        let data = Model.readFile()
        for(var i = 0 ; i < data.length ; i++){
            if(data[i].id === Number(task)){
                data[i].status = "complete"
                Model.Save(JSON.stringify(data,null,2))
            }
        }
    }
    static uncomplete(task){
        let data = Model.readFile()
        for(var i = 0 ; i < data.length ; i++){
            if(data[i].id === Number(task)){
                data[i].status = "uncomplete"
                Model.Save(JSON.stringify(data,null,2))
            }
        }
    }
    
}

module.exports = Model
