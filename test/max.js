
const max = require('../lib/collection/max')
const expect = require('chai').expect
describe("max函数测试", function () {
    // var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    it("返回list中的最大值", function () {
        const r = max([1, 2, 3, 4])
        const f = 4
        expect(r).to.be.equal(f)
    })
    it("返回数组对象中最大值", function () {
        var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
        const r = max(stooges, stooge => stooge.age)
        const f = {name: 'curly', age: 60}
        expect(JSON.stringify(r)).to.be.equal(JSON.stringify(f))
    })
})
