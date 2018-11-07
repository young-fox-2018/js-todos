"use strict"

class View {
    static printData(data) {
        let result = ""

        for (let i = 0; i < data.length; i++) {
            if (data[i].status) {
                result += `${i+1}. [x] ${data[i].task}\n`
            } else {
                result += `${i+1}. [ ] ${data[i].task}\n`
            }
        }

        console.log(result)
    }

    static printSingleData(data) {
        console.log(data)
    }

    static printAddData(data) {
        console.log(`Added ${data} to your TODO list`)
    }

    static printDeletedData(data) {
        console.log(`Deleted ${data} to your TODO list`)
    }
}

module.exports = View