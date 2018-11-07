"use strict"

class View {
    static displayList (data) {
        // console.log('this is the list of task: ')
        if ( data.length === 0 ) {
            console.log('No data Found')
        }
        for ( let i in data ) {
            if ( !data[i].completed ) {
                console.log(`${data[i].id}. [ ] ${data[i].task}`)
            } else {
                console.log(`${data[i].id}. [x] ${data[i].task}`)
            }
        }
    }

    static displayData (data) {
        if ( data.length === 0) {
            console.log('please input the task')
        } else{
            for ( let i in data ) {
                console.log(`Added '${data[i]}' to your TODO list ...`)
            }
        }
    }

    static displayDelete (data) {
        if ( data.length === 0) {
            console.log('please input the task')
        } else{
            for ( let i in data ) {
                console.log(`Deleted '${data[i].task}' from your TODO list ...`)
            }
        }
    }

    static displayTag (data) {
        // console.log(data[0].tags.length)
        let tags = ''
        for ( let i = 0; i < data[0].tags.length; i++ ) {
            tags += data[0].tags[i] + ' '
        }
        console.log(`Tagged task ${data[0].task} with tags: ${tags}`)
    }

    static displayHelp () {
        let data = `the list of command:
        list
        add <task_content>
        findBy <task_id>
        delete <task_id>
        complete <task_id>
        uncomplete <task_id>
        `
        console.log(data)
    }

    static displayTag (data) {

        for ( let i = 0; i < data.length; i++ ) {
            console.log(`${data[i].task} [${data[i].tags}]` )
        }
    }
}

module.exports = View