const every = require('./every')

function countBy(list, iteratee, context) {
    const obj = {}
    list.forEach((item, index) => {
        let key = iteratee.call(context ? context : this, item, index)
        if(!obj[key]) {
            obj[key] = 0
        }
        obj[key]++
    })
    return obj
}


module.exports = countBy
