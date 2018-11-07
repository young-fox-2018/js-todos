
const fs = require("fs");
const View = require("../views/view");
class Models {
    static list() {
        let list = [];
        for(let i = 0; i < parsed.length; i++){
            list.push(`${i+1} ${parsed[i].task}`);
        }
        return list;
    }
    
    static writeFile(data) {
        data = JSON.stringify(data, null, 2)
        fs.writeFileSync("data.json", data);
    }

    static readFile() {
        const data = fs.readFileSync("./data.json");
        let parsed = JSON.parse(data);
        return parsed
    }
    
    static addTodo(options) {

        let parsed = Models.readFile();
        let newList = {"task": options[0]};
        parsed.push(newList);

        Models.writeFile(parsed);
    }
    static findId(input) {

        let dataBase = Models.readFile()
        let id = Number(input[0]);
        let resultId = "";
        for(let i = 0; i < dataBase.length; i++){
            if(i+1 === id){
                resultId += `${i+1}. ${dataBase[i].task}`
            }
        }
        return resultId
    }

    static delete(input) {
        // console.log(input)
        let dataBase = Models.readFile();
        let id = parseInt(input);

        for(let i = 0; i < dataBase.length; i++){
            // console.log(dataBase[i])
            if(i+1 === id){
                dataBase.splice(i, 1)
            }
        }
        Models.readFile(parse)
    }

    static complete(input) {
        let task = parseInt(input)
        let dataBase = Models.readFile();
        for(let i = 0; i < dataBase.length; i++){
            if(i+1 === task) {
                dataBase[i].complete = true
            }
        }
        Models.readFile(parse)
    }

    static uncomplete(id) {
        for (let i = 0; i < parse.length; i++) {
            if (i+1 == id) {
                parse[i].complete = false
            }
        }
        Model.writeFile(parse);
    }

}

module.exports = Models;
