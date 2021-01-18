function defer(fn, ...args) {
    setTimeout(() => {
        fn(...args)
    }, 0)
}
module.exports = defer
