
const sortBy = require('../lib/collection/sortBy')
const expect = require('chai').expect
describe("sortBy函数测试", function () {

    it("返回排序后的数组", function () {
        const r = sortBy([1, 2, 3, 4, 5, 6], num => Math.sin(num))
        const f = [5, 4, 6, 3, 1, 2]
        expect(JSON.stringify(f)).to.be.equal(JSON.stringify(r))
    })

    it("返回排序后的数组对象", function () {
        const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
        const r = sortBy(stooges, 'name')
        const f = [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}]
        expect(JSON.stringify(f)).to.be.equal(JSON.stringify(r))
    })
})
