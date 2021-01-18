
function min(list, iteratee, context) {
    if(!Array.isArray(list)) {
        throw TypeError('list must be a array')
    }
    if(list.length < 2) throw Error('list must be at least has two elements')
    let min = list[0]
    for(let i = 1; i<list.length; i++) {
        if (iteratee) {
            let m = iteratee.call(context ? context : this, min)
            let c = iteratee.call(context ? context : this, list[i])
            if(m > c) {
                min = list[i]
            }
        }else {
            if(min > list[i]) {
                min = list[i]
            }
        }
    }
    return min
}

module.exports = min
