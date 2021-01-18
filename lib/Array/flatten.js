
function flatten(list, shallow = 1) {
    const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
    return list.reduce(reducer, [])
}
const arr = [1, [3, 7]]
const r = flatten(arr)
console.log(r);
