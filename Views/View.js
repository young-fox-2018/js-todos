class View{
  static help() {
    console.log('===== AVAILABLE COMMAND =====')
    console.log('node todo.js help')
    console.log('node todo.js list')
    console.log('node todo.js add <task_content>')
    console.log('node todo.js findById <task_id>')
    console.log('node todo.js delete <task_id>')
    console.log('node todo.js complete <taask_id>')
    console.log('node todo.js uncomplete <taask_id>')
  }

  static list(data) {
    let result = ''
    for (let i = 0; i < data.length; i++) {
        result += ` ${i+1}. ${data[i].task} \n`
    }
    console.log(result)
  }
  
  static add(task) {
    console.log(`Added ${task} to your TODO list ...`)
  }

  static display(data) {
    console.log(data)
  }

  static delete(task){
    console.log(`Deleted ${task} from your TODO list ...`)
  }

  static displayStatus(data){
    let result = ''

    for (let i = 0; i < data.length; i++) {
      if (data[i].status === "complete"){
        result += `${data[i].id}. [X] ${data[i].task} \n`
      }else {
        result += `${data[i].id}. [ ] ${data[i].task} \n`

      }
    }
    console.log(result)
  }
}

module.exports = View