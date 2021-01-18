
function size(list) {
    if(Array.isArray(list)) {
        return list.length
    }
    if(Object.prototype.toString.call(list) === "[object Object]") {
        return Object.keys(list).length
    }
}

module.exports = size
