
const bind = require('../lib/Functions/bind')
const expect = require('chai').expect
describe("bind函数测试", function () {

    it("返回一个新的函数并指定该函数上下文", function () {
        const obj = {
            age: 10
        }
        let foo = function (a) {
            return a + this.age
        }
        foo = bind(foo, obj)
        expect(foo(1)).to.be.equal(11)
    })

    it("返回一个新的函数指定函数上下文，并且可以为原函数添加额外参数", function () {
        let func = function(greeting){ return greeting + ': ' + this.name };
        func = bind(func, {name: 'moe'}, 'hi');
        let str = func()
        expect(str).to.be.equal('hi: moe')
    })

})
