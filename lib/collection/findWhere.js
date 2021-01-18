
function where(list, properties) {
    let arr = JSON.parse(JSON.stringify(list))
    for(let key in properties) {
        arr = arr.filter(element => element[key] === properties[key])
        if(arr.length > 0) {
            return arr[0]
        }
    }
    return []
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

const a = where(data, {job: 'cooker'})
console.log(a)
