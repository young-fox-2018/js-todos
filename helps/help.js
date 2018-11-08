let help = `$ node todo.js #
$ node todo.js help #
$ node todo.js list #
$ node todo.js add < task_content > #
$ node todo.js findById < task_id > #
$ node todo.js delete <task_id> #
$ node todo.js complete < task_id > #
$ node todo.js uncomplete < task_id > #
$ node todo.js list:created asc|desc
$ node todo.js list:completed asc|desc
$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> .. <tag_name_N>
$ node todo.js filter:<tag_name>
`


module.exports = help
