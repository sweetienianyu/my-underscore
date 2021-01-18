function initial(array, n = 3) {
    const arr = []
    if(n < 1) {
        return array
    }
    for(let i = 0; i<array.length - n; i++) {
        arr.push(array[i])
    }
    return arr
}
// const r = initial([5, 4, 3, 2, 1], 1)
// console.log(r);

module.exports = initial
