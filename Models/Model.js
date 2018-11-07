const fs = require("fs");

const dataDirectory = "/Users/Kevin/Documents/Hacktiv8/Phase-1/Excercise/week2/js-todos/data.json"





class Model {
    static readData (){
        let data = fs.readFileSync(dataDirectory, "utf8").trim()
        data = JSON.parse(data)

        return data
    }

    static list(){
        return Model.readData()
    }

    static listCompleted(){
        let list = Model.readData();
        let result = [];

        for (let i = 0; i < list.length; i++){
            if(list[i].status === true) result.push(list[i])
        }

        return result;
    }

    static addTask (task){
        let currentData = Model.readData()

        let id
        if(currentData.length === 0) id = 1
        else id = currentData[currentData.length-1].id + 1


        let temp = {
            "task" : task,
            "id" : id,
            "status" : false,
            "created_at" : new Date(),
            "completed_at" : null
        }

        currentData.push(temp)


        Model.save(currentData)

        return true

    }

    static deleteById (id){
        let currentData = Model.readData();
        let deletedTask = "";

        for (let i = 0; i < currentData.length; i++){
            if(currentData[i].id === id){
                deletedTask = currentData[i].task ;
                currentData.splice(i,1);
            }
        }

        Model.save(currentData);

        return deletedTask
    
    }

    static findById (id){
        let currentData = Model.readData();

        for( let i = 0; i < currentData.length; i++){
            if(currentData[i].id === id) return currentData[i]
        }

        return `No task by that ID`
    }

    static complete (id){
        let currentData = Model.readData();

        for( let i = 0; i < currentData.length; i++){
            if(currentData[i].id === id){ 
                currentData[i].status = true;
                currentData[i].completed_at = new Date();
            }
        }

        Model.save(currentData)
    }

    static uncomplete (id){
        let currentData = Model.readData();

        for( let i = 0; i < currentData.length; i++){
            if(currentData[i].id === id){
                 currentData[i].status = false;
                 currentData[i].completed_at = null;
            }
        }

        Model.save(currentData)
    }

    static tag (data){
        let id = Number(data[0]);
        let tags = data.slice(1).trim().split(" ")
        let currentData = this.readData();
        
        
        for( let i = 0; i < currentData.length; i++){
            if(currentData[i].id === id){
                currentData[i].tags = tags;
                Model.save(currentData)
                return currentData[i].task
            }
        }

        return null

    }

    static filter (tag){
        let currentData = this.readData();
        let tagRegExp = new RegExp (tag, "g");
        let result = []

        for(let i = 0; i < currentData.length; i++){
            if(currentData[i].tags !== undefined){
                if(currentData[i].tags.join("").match(tagRegExp)){
                    result.push(currentData[i])
                }
            }
        }

        return result
    }

    static save (data){
        data = JSON.stringify(data, null, 2);
        fs.writeFileSync(dataDirectory, data, "utf8")
    }


    static help(){
        return `This is Beta version, here are available Command:
        1. List
        2. Add <task_content>
        3. findByID <task_id>
        4. delete <task_id>
        5. complete <task_id>
        6. uncomplete <task_id`
    }
}




module.exports = Model