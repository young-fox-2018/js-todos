const argv = process.argv;
const Controller = require('./controllers/Controller');

let command = argv[2];
let option = argv.slice(3);

Controller.execute(command, option);

// var arr = [{no:2}, {no:1}, {no:3}];
// console.log(arr);
// arr.sort(function(a,b){return a.no > b.no})
// console.log(arr);