function reduce(list, iteratee, memo, context) {
    if (list.length <= 1) {
        return
    }
    if (memo) {
        for (let i = 0; i < list.length; i++) {
            memo = iteratee(memo, list[i])
        }
    } else {
        memo = list[0]
        for (let i = 1; i < list.length; i++) {
            memo = iteratee(memo, list[i])

        }
    }

    return memo
}

const result = reduce([3, 3, 3], (prev, cur) => {
    console.log('prev', prev)
    console.log('cur', cur)
    return prev + cur
}, 7)

console.log(result)
