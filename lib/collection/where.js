
function where(list, properties) {
    // just test
    // const expression = `element.name==='jack'`
    // const result = list.filter(element => eval(expression))
    let arr = JSON.parse(JSON.stringify(list))
    for(let key in properties) {
        arr = arr.filter(element => element[key] === properties[key])
    }
    return arr
}


const data = [
    {name: 'jack', age: 14, job: 'student'},
    {name: 'lucy', age: 21, job: 'dancer'},
    {name: 'tom', age: 19, job: 'cooker'},
    {name: 'sam', age: 30, job: 'cooker'},
    {name: 'french', age: 51, job: 'teacher'},
    {name: 'frank', age: 34, job: 'teacher'},
    {name: 'cloud', age: 14, job: 'student'}
]

// {
//     name: 'jack',
//     age: 100
// }

const a = where(data, {job: 'cooker', age: 100})
console.log(a)
