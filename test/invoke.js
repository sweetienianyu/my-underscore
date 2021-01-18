const invoke = require('../lib/collection/invoke')
const expect = require('chai').expect
describe("invoke函数测试", function () {
    const arr = [[3,1,2]]
    it("[[3,1,2]]数组排序", function () {
        const result = invoke(arr, 'sort')
        expect(JSON.stringify(result)).to.be.equal(JSON.stringify([[1,2,3]]))
    })
})
