const fs = require('fs');

class Model {
    static getTodos() {
        let data = fs.readFileSync('data.json', 'utf-8');
        data = JSON.parse(data);        
        return data;
    }

    static addTodo(data) {
        let lists = Model.getTodos();
        let todo = {
            'id': lists.length+1, 
            'completed': false,
            'task': data,
            'created': new Date(),
            'updated': new Date
        };
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
                lists[list]['completed'] = true;
                lists[list]['updated'] = new Date();
            }
        }
        
        Model.saveTodos(lists);
    }
    
    static uncompleteTodo(id) {
        let lists = Model.getTodos();
        
        for (let list in lists) {
            if (lists[list]['id'] === id) {
                lists[list]['completed'] = false;
                lists[list]['updated'] = new Date();
            }
        }
        
        Model.saveTodos(lists);
    }

    static giveTags(tags) {
        let lists = Model.getTodos();

        // loop id and tags
        for (let tag = 1; tag < tags.length; tag++)  {
            // loop todos
            for (let list = 0; list < lists.length; list++) {
                if (lists[list]['id'] == tags[0]) {
                    if (lists[list]['tag'] === undefined) {
                        lists[list]['tag'] = [tags[tag]];
                    } else {
                        lists[list]['tag'].push(tags[tag]);
                    }                    
                }
            }
        }
        Model.saveTodos(lists);
    }

    static filterTags(tag) {
        let lists = Model.getTodos();

        let listWithTags = [];
        // loop all list
        for (let list in lists) {
            if (lists[list]['tag'] === undefined) {
                // lists.splice(i, 1); 
                lists.splice(lists[list]['id']-1, 1);
            }
            // loop each tag
            for (let i =0; i < lists[list]['tag'].length; i++) {
                if (lists[list]['tag'][i] === tag) {
                    listWithTags.push(lists[list]);
                }
            }
        }
        return listWithTags;
    }

    static sort(command, task) {
        let lists = Model.getTodos();

        // show by created descending
        if (task === 'desc' && command === 'created') {            
            lists = this.descByDate(lists);
        }

        // show completed todos
        if (command === 'completed') {
            // console.log(`Masuk completed`)
            for (let i = 0; i < lists.length; i++) {
                if (lists[i]['status'] === false) {
                    lists.splice(i,1);
                }
            }
            if (task === 'desc') {
                lists = this.descByDate(lists, 'updated');
            }
        }

        // show uncompleted todos
        if (command === 'uncompleted') {
            // console.log(`Masuk completed`)
            for (let i = 0; i < lists.length; i++) {
                if (lists[i]['status'] === true) {
                    lists.splice(i,1);
                }
            }
            if (task === 'desc') {
                lists = this.descByDate(lists);
            }
        }
        return lists;        
    }

    static descByDate(lists, command = 'created') {
        lists.sort(function(a, b) {
            var dataA = new Date(a[command]), dataB = new Date(b[command]);
            return dataB - dataA;
        });
        return lists

    }
}

module.exports = Model