function reduceRight(list, iteratee, memo, context) {
    if (list.length <= 1) {
        return
    }
    if (memo) {
        for (let i = list.length-1; i >= 0; i--) {
            memo = iteratee(memo, list[i])
        }
    } else {
        memo = list[0]
        for (let i = list.length-1; i >= 0; i--) {
            memo = iteratee(memo, list[i])

        }
    }

    return memo
}

const result = reduceRight([3, 3, 6], (prev, cur) => {
    console.log('prev', prev)
    console.log('cur', cur)
    return prev + cur
}, 7)

console.log(result)
