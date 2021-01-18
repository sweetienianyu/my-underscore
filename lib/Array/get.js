function get(list, index = 0, initial = 0) {
    const target = Number(initial) + Number(index)
    return list[target]
}

module.exports = get
