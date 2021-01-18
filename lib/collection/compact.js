
const filter = require('./filter')
function compact(list) {
    return filter(list, item => !!item)
}
module.exports = compact
