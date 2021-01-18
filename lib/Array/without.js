function without(array, ...args) {
    const rest = [...args]
    return array.filter(element => !rest.includes(element))
}

// const r = without([1, 2, 1, 0, 3, 1, 4], 0, 1);
module.exports = without
