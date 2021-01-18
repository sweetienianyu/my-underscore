
const min = require('../lib/collection/min')
const expect = require('chai').expect
describe("min函数测试", function () {
    it("返回list中的最小值", function () {
        const r = min([1, 2, 3, 4])
        const f = 1
        expect(r).to.be.equal(f)
    })
    it("返回数组对象中最小值", function () {
        var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
        const r = min(stooges, stooge => stooge.age)
        const f = {name: 'moe', age: 40}
        expect(JSON.stringify(r)).to.be.equal(JSON.stringify(f))
    })
})
