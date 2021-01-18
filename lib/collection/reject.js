
function reject(list, predicate, context) {
    const arr = []
    for(let i = 0; i<list.length; i++) {
        const result = predicate.call(context ? context: this, list[i], i, list)
        if(!result) {
            arr.push(list[i])
        }
    }
    return arr
}

module.exports = reject
