class View {

    static help() {
        console.log(
            `
            =============================================================================
             node todo.js list (Melihat daftar TODO)
             node todo.js add <task_contenct> (Menambahkan TODO kedalam list)
             node todo.js findById <task_id> (Melihat detail TODO sesuai 'task_id' nya)
             node todo.js delete <task_id> (Menghapus TODO sesuai 'task_id' nya)
             node todo.js complete <task_id> (Menandai status TODO selesai)
             node todo.js uncomplete <task_id> (Menandai status TODO belum selesai)
             node todo.js list:created <acd/desc>
             node todo.js list:complete <acd/desc>
             node todo.js tag <task_id> <tag_name_1> <tag_name2> ... <tag_name_N>
             =============================================================================
             `
        )
    }

    static display(data) {
        console.log(data)
    }

    static displayList(data) {
        let result = ''

        for(let i = 0; i < data.length; i++) {
            if (data[i].status === true) {
                result += `${data[i].id}. [x] ${data[i].task} \n`
            } else {
                result += `${data[i].id}. [ ] ${data[i].task} \n`
            }
        }

        console.log(result)
    }

    static notFound(msg) {
        console.log(msg)
    }

    static filterDisplay(data) {
        let result = ''
        for(let i = 0; i < data.length; i++) {
            result += `${data[i].id}. ${data[i].task} [${data[i].tag}]\n`
        }
        console.log(result)
    }
}

module.exports = View