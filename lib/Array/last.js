function last(array, n) {
    if(!n) {
        return array[array.length - 1]
    }
    const arr = []
    const start = array.length - n
    for(let i = start; i<array.length; i++) {
        arr.push((array[i]))
    }
    return arr
}

const r = last([5, 4, 3, 2, 1], 1);
console.log(r);
