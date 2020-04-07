class TodoView {
    static printOne(input) {
        console.log(input)
    }

    static printMany(manyInput) {
        manyInput.forEach(input => {
            console.log(input)
        });
    }

    static printError(err) {
        console.log('ERROR:', err)
    }
}

module.exports = TodoView