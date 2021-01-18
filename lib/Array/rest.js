function rest(array, n = 1) {
    const arr= []
    for(let i = n; i<array.length; i++) {
        arr.push(array[i])
    }
    return arr
}

module.exports = rest
