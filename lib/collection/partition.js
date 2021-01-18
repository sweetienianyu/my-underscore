function partition(list, predicate) {
    const whole = []
    const match = []
    const rest = []
    for(let i = 0;i<list.length; i++) {
        const test = predicate(list[i], i)
        if(test) {
            match.push(list[i])
        }else {
            rest.push(list[i])
        }
    }
    return [match, rest]
}

module.exports = partition

