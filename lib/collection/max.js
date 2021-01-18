
function max(list, iteratee, context) {
    if(!Array.isArray(list)) {
        throw TypeError('list must be a array')
    }
    if(list.length < 2) throw Error('list must be at least has two elements')
    let max = list[0]
    for(let i = 1; i<list.length; i++) {
        if (iteratee) {
            let m = iteratee.call(context ? context : this, max)
            let c = iteratee.call(context ? context : this, list[i])
            if(m < c) {
                max = list[i]
            }
        }else {
            if(max < list[i]) {
                max = list[i]
            }
        }
    }
    return max
}

module.exports = max
