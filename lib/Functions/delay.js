// const bind = require('./bind')
function delay(fn, wait, ...args) {
    setTimeout(() => {
        fn(...args)
    }, wait)
}
// let log = bind(console.log, console)
// delay(log, 3000, 'logged later', 'hello');
module.exports = delay
