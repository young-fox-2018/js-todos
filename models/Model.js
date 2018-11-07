const fs = require('fs')
const View = require('../views/View')

var data = fs.readFileSync('/home/lenovo/Hacktiv8/phase-1/week-2/js-todos/data.json')
var parse = JSON.parse(data)

class Model {
    static writeFile(file) {
        file = JSON.stringify(file, null, 2)
        fs.writeFileSync('data.json', file)
    }

    static list() {
        let arrList = [];
        for (let i = 0; i < parse.length; i++) {
            if (parse[i].complete === false) {
                arrList.push(`${i+1}. [ ] ${parse[i].task}`)
            } else {
                arrList.push(`${i+1}. [x] ${parse[i].task}`)   
            }
        }
        return arrList;
    }

    static add(task) {
        let obj = {
            task: task[0],
            complete: false,
            created: new Date
        };
        parse.push(obj);
        Model.writeFile(parse);
        return `Added "${task}" to your TODO list...`
    }

    static delete(id) {
        for (let i = 0; i < parse.length; i++) {
            if (i+1 == id[0]) {
                parse.splice(i, 1);
            }
        }
        Model.writeFile(parse);
    }

    static findId(id) {
        for (let i = 0; i < parse.length; i++) {
            if (i+1 == id) {
                if (parse[i].complete === true) {
                    return `${i+1}. [x] ${parse[i].task}`;
                } else {
                    return `${i+1}. [ ] ${parse[i].task}`;
                }
            }
        }
    }

    static complete(id) {
        for (let i = 0; i < parse.length; i++) {
            if (i+1 == id) {
                parse[i].complete = true
            }
        }
        Model.writeFile(parse);
    }

    static uncomplete(id) {
        for (let i = 0; i < parse.length; i++) {
            if (i+1 == id) {
                parse[i].complete = false
            }
        }
        Model.writeFile(parse);
    }

    static list_created(option) {
        if (option[0] === 'asc') {
            parse.sort(function(a, b){return a.created > b.created});
            return parse;
        } else {
            parse.sort(function(a, b){return a.created < b.created});
            return parse;
        }
    }

    // static list_completed(option) {
    //     let result = [];
        
    //     if (option[0] === 'asc') {
    //         for (let i = 0; i < parse.length; i++) {
    //             if (parse[i].complete === true) {
    //                 result.unshift(parse[i]);
    //             } else {
    //                 result.push(parse[i]);
    //             }
    //         }
    //         console.log(result);
    //     } else {
    //         for (let i = 0; i < parse.length; i++) {
    //             if (parse[i].complete === true) {
    //                 result.push(parse[i]);
    //             } else {
    //                 result.unshift(parse[i]);
    //             }
    //         }
    //     }
    //     return result;
    // }
}

module.exports = Model