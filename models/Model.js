const fs = require('fs')

class Model {
    constructor(){
    }

    static readFile() {
        let file = JSON.parse(fs.readFileSync('data.json','utf8'))
        return file
    }
    static writeFile(data) {
        fs.writeFileSync('data.json',data,'utf8')
    }

    static getList(orderBy,typeSort){
        let data =  Model.readFile()
        let arr = []
        for (let i = 0; i < data.length; i++) {
            if(orderBy === 'completed') {
                if(data[i][orderBy] === true) {
                    arr.push(data[i])
                }
            }else {
                arr.push(data[i])
            }
            // console.log(arr)
        }
        if(orderBy === undefined) {
            orderBy = 'created_at'
        }else if(orderBy === 'created') {
            orderBy = 'created_at'
        }else if(orderBy === 'updated') {
            orderBy = 'updated_at'
        }

        if(typeSort == 'asc' || typeSort == 'ascending') {
            Model.sortAscending(arr,orderBy)
            return arr
        } else if(typeSort == 'desc' || typeSort == 'descending') {
            Model.sortDescending(arr,orderBy)
            return arr
        }else{
            Model.sortAscending(arr,orderBy)
            return arr
        }
    }

    static sortAscending(data,orderBy) {
       return  data.sort(function(a, b){
            var x = a[orderBy].toLowerCase();
            var y = b[orderBy].toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
    }
    static sortDescending(data,orderBy) {
        return data.sort(function(a, b){
            var x = a[orderBy].toLowerCase();
            var y = b[orderBy].toLowerCase();
            if (x > y) {return -1;}
            if (x < y) {return 1;}
            return 0;
        })
    }

    static addTask(task_content) {
        let data =  Model.readFile()
        let obj = {
            "task" : task_content,
            "status" : [ ],
            "created_at" : new Date(),
            "updated_at" : new Date(),
            "tag" : false
        }
        // console.log(obj)
        data.push(obj)
        let dataWrite = JSON.stringify(data,null,2)
        Model.writeFile(dataWrite)
    }

    static findById(task_id) {
        let data =  Model.readFile()
        // console.log(data)
        let dataById = ''
        for (let i = 0; i < data.length; i++) {
            if(i === task_id-1) {
                dataById = `${i+1}. ${data[i].task}`
            }
        }
        return dataById
    }

    static deleteTask(task_id) {
        let data =  Model.readFile()
        let dataDeleted = ''
        for (let i = 0; i < data.length; i++) {
            if(i === task_id-1) {
                dataDeleted = data[i].task
                data.splice(i,1)
            }
        }
        let dataWrite = JSON.stringify(data,null,2)
        Model.writeFile(dataWrite)
        return dataDeleted
    }

    static completeTask(task_id) {
        let data =  Model.readFile()
        for (let i = 0; i < data.length; i++) {
            if(i === task_id-1) {
                data[i].completed = true
                data[i].updated_at = new Date()
            }
        }
        let dataWrite = JSON.stringify(data,null,2)
        Model.writeFile(dataWrite)
    }

    static uncompleteTask(task_id) {
        let data =  Model.readFile()
        for (let i = 0; i < data.length; i++) {
            if(i === task_id-1) {
                data[i].completed = false
                data[i].updated_at = new Date()
            }
        }
        let dataWrite = JSON.stringify(data,null,2)
        Model.writeFile(dataWrite)
    }

    static addTag(task_id, list_tag) {
        let data =  Model.readFile()
        let nama_task = ''
        for (let i = 0; i < data.length; i++) {
            if(i === task_id-1) {
                for (let j = 0; j < list_tag.length; j++) {
                    data[i].tag.push(list_tag[j])
                }
                nama_task = data[i].task
                data[i].updated_at = new Date()
                
            }
        }
        let dataWrite = JSON.stringify(data,null,2)
        Model.writeFile(dataWrite)
        return nama_task
    }
    static filter(search_tag) {
        let data =  Model.readFile()
        let data_filtered = []
        for (let i = 0; i < data.length; i++) {
            if(data[i].tag.includes(search_tag)) {
                data_filtered.push(`${i+1}. ${data[i].task} [${data[i].tag}]`)
            }
            console.log(data[i])
        }
        console.log(data_filtered)
        return data_filtered
    }

    //unecessary static class
    static resetAllDate() {
        let data =  Model.readFile()
            for (let i = 0; i < data.length; i++) {
                    data[i].updated_at = new Date()
            }
            let dataWrite = JSON.stringify(data,null,2)
        Model.writeFile(dataWrite)
    }

}
module.exports = Model