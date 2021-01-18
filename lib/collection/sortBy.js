
const map = require('./map')
function sortBy(list, iteratee, context) {
    const mapped = map(list, (el, i)=> {
        if(typeof iteratee === 'function') {
            return {index: i, value: iteratee(el)}
        }
        if(typeof iteratee === 'string') {
            if(typeof el[iteratee] === 'string') {
                return {index: i, value: el[iteratee].toLowerCase()}
            }else {
                return {index: i, value: el[iteratee]}
            }
        }
    }, context)
    mapped.sort((a, b) => {
        if (a.value > b.value) {
            return 1;
        }
        if (a.value < b.value) {
            return -1;
        }
        return 0;
    })
    const result = mapped.map(function(el){
        return list[el.index];
    });
    return result
}

module.exports = sortBy


