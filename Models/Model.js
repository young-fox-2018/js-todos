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

    static addTask (task){
        let currentData = Model.readData()

        let id
        if(currentData.length === 0) id = 1
        else id = currentData[currentData.length-1].id + 1


        let temp = {
            "task" : task,
            "id" : id,
            "status" : false
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
            if(currentData[i].id === id) currentData[i].status = true;
        }

        Model.save(currentData)
    }

    static uncomplete (id){
        let currentData = Model.readData();

        for( let i = 0; i < currentData.length; i++){
            if(currentData[i].id === id) currentData[i].status = false;
        }

        Model.save(currentData)
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