const fs = require('fs');

class Model {
    static getTodos() {
        let data = fs.readFileSync('data.json', 'utf-8');
        data = JSON.parse(data);        
        return data;
    }

    static addTodo(data) {
        let lists = Model.getTodos();
        let todo = {'id': lists.length+1, 'status': 'uncomplete' ,'task': data}
        lists.push(todo);
        Model.saveTodos(lists);
    }

    static saveTodos(data) {
        data = JSON.stringify(data, null, 2);
        fs.writeFileSync('data.json', data);
    }

    static findTodo(id) {
        let lists = Model.getTodos();
        
        for (let list in lists) {            
            if (Number(list) + 1 == id) {
                return [lists[list]];
            }
        }
    }

    static deleteTodo(id) {
        let lists = Model.getTodos();
        
        for (let i = 0; i < lists.length; i++) {
            if (lists[i]['id'] === id) {
                lists.splice(i, 1);                
            }
        }
        
        // re-assign id of each todos
        for (let i = 0; i < lists.length; i++) {
            lists[i]['id'] = i+1;
        }
        
        Model.saveTodos(lists);
    }
    
    static completeTodo(id) {
        let lists = Model.getTodos();
        
        for (let list in lists) {
            if (lists[list]['id'] === id) {
                lists[list]['status'] = 'complete'
            }
        }
        
        Model.saveTodos(lists);
    }

    static uncompleteTodo(id) {
        let lists = Model.getTodos();

        for (let list in lists) {
            if (lists[list]['id'] === id) {
                lists[list]['status'] = 'uncomplete'
            }
        }
        
        Model.saveTodos(lists);
    }
}

module.exports = Model