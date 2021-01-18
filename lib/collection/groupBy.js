const map = require('./map')
function groupBy(list, iteratee, context) {
    const mapper = map(list, (ele, idx) => {
        return {
            value: ele,
            prop: iteratee(ele)
        }
    })
    const obj = {}
    mapper.forEach(ele => {
        if(!obj[ele.prop]) {
            obj[ele.prop] = []
        }
        obj[ele.prop].push(ele.value)
    })
    return obj
}

module.exports = groupBy
