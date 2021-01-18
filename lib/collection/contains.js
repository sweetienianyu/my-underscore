
function contains(list, value, fromIndex = 0) {
    if(!list || !list.length || !list[fromIndex]) {
        return false
    }
    for(let i = fromIndex; i<list.length; i++) {
        if(value === list[i]) {
            return true
        }
    }
    return false
}

module.exports = contains
