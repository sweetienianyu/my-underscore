function bind(fn, context, ...args) {
    let originFn = fn
    let params = args
    return function() {
        let mergeArgs = Array.from(arguments).concat(params)
        return originFn.apply(context, mergeArgs)
    }
}
module.exports = bind
