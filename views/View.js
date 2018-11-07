class View {
    static help() {
        console.log(`--------------- HELP ---------------`);
        console.log(`$ node todo.js`);
        console.log(`$ node todo.js help`);
        console.log(`$ node todo.js list`);
        console.log(`$ node todo.js add <task_content>`);
        console.log(`$ node todo.js findById <task_id>`);
        console.log(`$ node todo.js delete <task_id>`);
        console.log(`$ node todo.js complete <task_id>`);
        console.log(`$ node todo.js uncomplete <task_id>`);
        console.log(`$ node todo.js list:created asc|dsc`);
        console.log(`$ node todo.js list:completed asc|dsc`);
        console.log(`$ node todo.js tag`);
        console.log(`$ node todo.js filter:<tag_name>`);
    }

    static list(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    }

    static print(data) {
        console.log(data);
    }
}

module.exports = View