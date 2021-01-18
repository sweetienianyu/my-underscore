// 接收两个参数：函数 f 和 参数列表，返回函数 g。当调用 g 时，将初始参数和 g 的参数顺次传给 f，并返回 f 的执行结果。
// const multiply2 = (a, b) => a * b;
// const double = R.partial(multiply2, [2]);
// double(2); //=> 4
//
// const greet = (salutation, title, firstName, lastName) =>
//     salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
//
// const sayHello = R.partial(greet, ['Hello']);
// const sayHelloToMs = R.partial(sayHello, ['Ms.']);
// sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'


// var subtract = function(a, b) { return b - a; };
// sub5 = _.partial(subtract, 5);
// sub5(20);
// => 15
//
// // Using a placeholder
// subFrom20 = _.partial(subtract, _, 20);
// subFrom20(5);
// => 15
// f arguments => g
// g() => arguments + self augments

function partial(fn, ...args) {
    const originFn = fn
    return function() {
        const mergeArguments = Array.from(args).concat(Array.from(arguments))
        return originFn(...mergeArguments)
    }
}
let subtract = function(a, b) { return b - a; }
sub5 = partial(subtract, 5)
console.log(sub5(20))

subFrom20 = partial(subtract, '-', 20);
console.log(subFrom20(5))
module.exports = partial
