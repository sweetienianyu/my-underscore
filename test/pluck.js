
const pluck = require('../lib/collection/pluck')
const expect = require('chai').expect
describe("pluck函数测试", function () {
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    it("萃取数组对象中指定属性值", function () {
        const r = pluck(stooges, 'name')
        const f = [ 'moe', 'larry', 'curly' ]
        expect(JSON.stringify(r)).to.be.equal(JSON.stringify(f))
    })
})
