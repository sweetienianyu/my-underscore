const isType = function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}

module.exports = {
    isArray,
    isObject
}
