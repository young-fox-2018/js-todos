const Task = require("../models/Task")
const View = require("../views/View")

class TaskController {
    
    static addTask(input) {
        Task.addTask(input)
        View.showAddTask(input)
    }

    static showList() {
        let list = Task.showList()
        list.forEach(task => {
            let dataString = ''
            let remark = ' '
            if (task.mark === true) remark = 'X'
            dataString += `${task.id}. [${remark}] ${task.task} [${task.tags}] ====> ${new Date(task.createdAt)}`
            View.showList(dataString)
        })
    }

    static findById(input) {
        let task = Task.findById(input)
        View.showFindTask(task)
    }

    static deleteTask(input) {
        let task = Task.deleteTask(input)
        View.showAlertDelete(task)
    }

    static completeTask(input) {
        Task.completeTask(input)
        TaskController.showList()
    }

    static uncompleteTask(input) {
        Task.uncompleteTask(input)
        TaskController.showList()
    }

    static showListCreated(input) {
        let list = Task.showList()
        if(input === 'asc') list = list.sort((a,b)=> {return new Date(a.createdAt) - new Date(b.createdAt)})
        else if (input === 'desc') list = list.sort((a,b)=> {return new Date(b.createdAt) - new Date(a.createdAt)})
        list.forEach(task => {
            let dataString = ''
            let remark = ' '
            if (task.mark === true) remark = 'X'
            dataString += `${task.id}. [${remark}] ${task.task} [${task.tags}] ====> ${new Date(task.createdAt)}`
            View.showList(dataString)
        })
    }

    static showListOutstanding(input) {
        let list = Task.showList()
        if(input === 'asc') list = list.sort((a,b)=> {return new Date(a.createdAt) - new Date(b.createdAt)})
        else if (input === 'desc') list = list.sort((a,b)=> {return new Date(b.createdAt) - new Date(a.createdAt)})
        list.forEach(task => {
            if (task.mark === false){
                let remark = ' '
                let dataString = ''
                dataString += `${task.id}. [${remark}] ${task.task} [${task.tags}] ====> ${new Date(task.createdAt)}`;
                View.showList(dataString);
            } 
        })
    }

    static showListCompleted(input) {
        let list = Task.showList()
        if(input === 'asc') list = list.sort((a,b)=> {return new Date(a.completedAt) - new Date(b.completedAt)})
        else if (input === 'desc') list = list.sort((a,b)=> {return new Date(b.completedAt) - new Date(a.completedAt)})
        list.forEach(task => {
            if (task.mark === true){
                let remark = 'X'
                let dataString = ''
                dataString += `${task.id}. [${remark}] ${task.task} [${task.tags}] ====> ${new Date(task.completedAt)}`;
                View.showList(dataString);
            } 
        })
    }

    static addTag(id,tags) {
        Task.addTag(id,tags)
        TaskController.showList()
    }

    static filterByTag(filter,input) {
        let list = Task.showList()
        if(input === 'asc') list = list.sort((a,b)=> {return new Date(a.createdAt) - new Date(b.createdAt)})
        else if (input === 'desc') list = list.sort((a,b)=> {return new Date(b.createdAt) - new Date(a.createdAt)})
        list.forEach(task => {
            task.tags.forEach(tag => {
                if(tag === filter) {
                    let remark = ' '
                    let dataString = ''
                    if (task.mark === true) remark = 'X'
                    dataString += `${task.id}. [${remark}] ${task.task} [${task.tags}] ====> ${new Date(task.createdAt)}`;
                    View.showList(dataString);
                }
            }) 
        })
    }

}

module.exports = TaskController