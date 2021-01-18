
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
function shuffle(list) {
    const data = JSON.parse(JSON.stringify(list))
    for(let i = 0; i<list.length; i++) {
        const first = randomInt(0, data.length-1)
        let a1 = data[i]
        let a2 = data[first]
        let tmp = a1
        data[i] =a2
        data[first] = tmp
    }
    return data
}


// O(n)的打乱方法
function fisher_yates_shuffle(arr) {
    for(let i = 0;i<arr.length; i++) {
        const j = i+Math.floor(Math.random() * (arr.length - i));
        [arr[i], arr[j]] = [arr[j], arr[j]]
        return arr
    }
}

function shuffle_simple(arr) {
    return arr.sort(() => Math.random()-.5)
}

// 生成100万条数据 并重排
console.time('sort')
function gen(w) {
    const arr = []
    for(let i = 0;i<w*10000; i++) {
        arr[i] = i + 1
    }
    shuffle_simple(arr)
    return arr
}
gen(100)
console.timeEnd('sort')
module.exports = shuffle



