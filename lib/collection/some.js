

function some(list, predicate, context) {
    for(let i = 0; i<list.length; i++) {
        const test = predicate.call(context ? context: this, list[i], i, list)
        if(test) {
            return true
        }
    }
    return false
}

module.exports = some
