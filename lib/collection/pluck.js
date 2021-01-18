const map = require('./map')
function pluck(list, propertyName) {
    return map(list, element => {
        if(element[propertyName]) {
            return element[propertyName]
        }else {
            return null
        }
    })
}

module.exports = pluck
