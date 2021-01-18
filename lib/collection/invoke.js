const map = require('./map')
// todo 待完善
function invoke(list, methodName, args) {
    return map(list, function (element) {
        if(element[methodName]) {
            return element[methodName]()
        }else {
            throw Error(`${element} haven't ${methodName} method`)
        }
    })
}

module.exports = invoke


