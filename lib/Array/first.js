function first(list, n = 0) {
    return n === 0 ? list[0] : list.slice(0, n)
}

module.exports = first

