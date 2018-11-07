const Model = require('../Models/Model')
const View = require('../Views/View')


class Controller {
    static help() {
        View.help()
    }
    static list() {
        // console.log(`Your TODO list...`)
        Model.list((err, data) => {
            if (err) View.viewError(err)
            else View.viewData(data)
        })
    }
    static add(input) {
        Model.add(input, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    static findById(id) {
        Model.findById(id, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    static delete(id) {
        Model.delete(id, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    static complete(id) {
        Model.complete(id, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })

    }
    static uncomplete(id) {
        Model.uncomplete(id, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })

    }
    static listCreatedAsc() {
        Model.listCreatedAsc((err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    static listCreatedDsc() {
        Model.listCreatedDsc((err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    static listCompletedAsc() {
        Model.listCompletedAsc((err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    static listCompletedDsc() {
        Model.listCompletedDsc((err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    //--------
    static listOutstandingAsc() {
        Model.listOutstandingAsc((err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    static listOutstandingDsc() {
        Model.listOutstandingDsc((err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
    //--------

    static addTag(id, tag) {
        Model.addTag(id, tag, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })

    }
    static filterTag(tag) {
        // console.log('Helllo')
        Model.filterTag(tag, (err, data) => {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }


}


module.exports = Controller