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
            "completed": false,
            "tag": [],
            "create_date": new Date(),
            "update_date": new Date()
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

    static tag(option){
        let id = option[0]
        let tag = option.slice(1)
        let data = Model.readFile()
        let list = ""
        for( let i = 0; i < data.length; i++){
            if( id == i+1 ){
                for(let j = 0; j < option.slice(1).length; j++){
                    if (data[i].tag.indexOf(tag[j]) === -1) data[i].tag.push(tag[j]);
                    list = data[i].task
                }
            }
        }
        Model.writeFile(data)
        return list
        
    }
    
    static filter(option,data){
        let dataTag = []
        for(let i in data){
            let obj = {
                "id": "",
                "list": []
            }
            if(data[i].tag.indexOf(option) !== -1){
                obj.id = (Number(i)+1)
                obj.list.push(data[i].task)
                obj.list.push(data[i].tag)
                dataTag.push(obj)
            }
        }
        // console.log(dataTag)
        return (dataTag)
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
                data[i].completed = true
                data[i].update_date = new Date()
            }
        }

        Model.writeFile(data)
    }

    static uncomplete(id){
        let data = Model.readFile()

        for( let i = 0; i < data.length; i++){
            if( id == i+1 ){
                data[i].completed = false
                data[i].update_date = new Date()
            }
        }

        Model.writeFile(data)
    }

}

module.exports = Model