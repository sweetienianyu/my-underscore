

function every(list, predicate, context) {
    let result = true
    for(let i = 0; i<list.length; i++) {
        const test = predicate.call(context ? context: this, list[i], i, list)
        if(!test) {
            return false
        }
    }
    return result
}

module.exports = every

const arr = [1, 2, 3]
every(arr, function(element, index) {
    console.log(element, index)
})