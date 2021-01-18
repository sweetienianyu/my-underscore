const reject = require('../lib/collection/reject')
const expect = require('chai').expect
describe("reject函数测试", function () {
    it("[1, 2, 3, 4, 5, 6] => [1, 3, 5]", function () {
        const arr = [1, 2, 3, 4, 5, 6]
        const odds = reject(arr, num => num % 2 === 0)
        expect(JSON.stringify(odds)).to.be.equal(JSON.stringify([1, 3, 5]))
    })
})
