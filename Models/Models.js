const fs = require("fs")
let dataFile = fs.readFileSync("data.json","utf8")

class Models{
    static add(input){
        let obj = {}
        obj.task = input[0]
        obj.status = false
        obj.createdAt = new Date()
        obj.tags = []
        dataFile.push(obj)
        dataFile = JSON.stringify(dataFile, null, 2)
        fs.writeFileSync("data.json",dataFile)
        return `Added ${input} to your To-Do list`
    }
    static getData(input, order){
        dataFile = JSON.parse(dataFile)
        if(input === "created"){
            if(order[0] === "asc"){
                let data = dataFile.sort(function(a, b) {
                    let dateA = a["createdAt"], dateB = b["createdAt"];
                    return dateA > dateB;
                })
            return data
            }
            else{
                let data = dataFile.sort(function(a, b) {
                    let dateA = a["createdAt"], dateB = b["createdAt"];
                    return dateA < dateB;
                })
            return data
            }
        }
        else if(input === "completed"){
            let arrComp = []
            for(let i = 0 ; i < dataFile.length ; i++){
                if(dataFile[i]["status"] === true){
                    arrComp.push(dataFile[i])
                }
            }

            if(input[0] === "asc"){
                let data = arrComp.sort(function(a, b) {     
                    let dateA = a["updatedAt"], dateB = b["updatedAt"];
                    return dateA > dateB;
                })
            return data
            }
            else{
                let data = arrComp.sort(function(a, b) {
                    let dateA = a["updatedAt"], dateB = b["updatedAt"];
                    return dateA < dateB;
                })
            return data
            }
        }
        return dataFile
    }
    static findById(input){
        return `${input}. ${dataFile[input-1]["task"]}`
    }
    static delete(input){
        input = JSON.parse(input)
        dataFile = JSON.parse(dataFile)
        let toDoItem = ""
        for(let i = 0 ; i < dataFile.length ; i++){
            if(input === i+1){
                toDoItem = dataFile[i]["task"]
                dataFile.splice(i, 1)
                dataFile = JSON.stringify(dataFile, null, 2)
            }
        }
        fs.writeFileSync("data.json",dataFile)
        return `Deleted ${toDoItem} to your To-Do list`
    }
    static complete(input){
        let index = JSON.parse(input)
        dataFile = JSON.parse(dataFile)
        for(let i = 0 ; i < dataFile.length ; i++){
            if(index === i+1){
                dataFile[i]["status"] = true
                dataFile[i]["updatedAt"] = new Date()
                dataFile = JSON.stringify(dataFile, null, 2)
            }
            fs.writeFileSync("data.json",dataFile)
        }
    }
    static uncomplete(input){
        let index = JSON.parse(input)
        dataFile = JSON.parse(dataFile)
        for(let i = 0 ; i < dataFile.length ; i++){
            if(index === i+1){
                dataFile[i]["status"] = false
                dataFile[i]["updatedAt"] = new Date()
                dataFile = JSON.stringify(dataFile, null, 2)
            }
            fs.writeFileSync("data.json",dataFile)
        }
    }
    static tag(input){
        let itemNo = input[0]-1
        input = input.slice(1)
        dataFile = JSON.parse(dataFile)

        // To remove duplicate inputs when initializing the item
        for(let h = 0 ; h < input.length-1 ; h ++){
            if(input[h] === input[h+1]){
                input.splice(h,1)
            }
        }

        for(let i = 0 ; i < dataFile.length ; i++){
            if(i === itemNo){
                if(dataFile[i]["tags"] === []){
                    for(let iInput = 0 ; iInput < input.length ; iInput++){
                        dataFile[i]["tags"].push(input[iInput])
                    }
                }
                else{
                    for(let iInput = 0 ; iInput < input.length ; iInput++){
                        for(let iTags = 0 ; iTags < dataFile[i]["tags"].length ; iTags++){
                            if(input[iInput] === dataFile[i]["tags"][iTags]){
                                break;
                            }
                            else{
                                dataFile[i]["tags"].push(input[iInput])
                            }
                        }
                    }
                }

                dataFile = JSON.stringify(dataFile, null, 2)
            }
        }
        fs.writeFileSync("data.json",dataFile)
    }
    static filter(input){
        dataFile = JSON.parse(dataFile)
        let res = []
        for(let i = 0 ; i < dataFile.length ; i++){
            for(let iTags = 0 ; iTags < dataFile[i]["tags"].length ; iTags++){
                if(input === dataFile[i]["tags"][iTags]){
                    res.push(i)
                }
            }
            return [res, dataFile]
        }
    }

    
}

module.exports = Models