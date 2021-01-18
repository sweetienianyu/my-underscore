const some = require('../lib/collection/some')
const expect = require('chai').expect
describe("some函数测试", function () {
    const arr = [1, 2, 3, 4, 5, 6]
    it("[1, 2, 3, 4, 5, 6]中有一个元素等于5", function () {
        const result = some(arr, n=>n===5)
        expect(result).to.be.equal(true)
    })
})
