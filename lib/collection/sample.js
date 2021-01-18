const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

function sample(list, n=1) {
    console.log(n)
    const arr = []
    const min = 0
    const max = list.length - 1
    for(let i = 0; i<n; i++) {
        let random = randomInt(min, max)
        while(arr.includes(list[random])) {
            random = randomInt(min, max)
        }
        arr.push(list[random])
    }
    return arr
}
console.log(sample([1, 2, 3, 4, 5, 6], 3))
// module.exports = sample
