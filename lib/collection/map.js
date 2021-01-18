// import {isArray, isObject} from "../../type";

function map(list, iteratee, context) {
    const arr = []
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            const element = iteratee && iteratee.call(context ? context : this, list[i], i, list)
            arr.push(element)
        }
    }
    return arr
}
//
// const obj = {
//     name: 'hello',
//     age: 200
// }
// each(obj, (k, v)=>console.log(k, v))
// console.log(isArray([2,3]))

module.exports = map

const arr = [1, 2, 3]
const newArr = map(arr, function(element, index) {
    return element * 2
})


