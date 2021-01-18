const every = require('../lib/collection/every')
const expect = require('chai').expect
describe("every函数测试", function () {
    const arr = [1, 2, 3, 4, 5, 6]
    it("[1, 2, 3, 4, 5, 6] => false", function () {
        const result = every(arr, n=>n%2===0)
        expect(result).to.be.equal(false)
    })

    it("数组[1, 2, 3, 4, 5, 6]中有一个元素小于5就不通过", function () {
        const result = every(arr, n=> n<5)
        expect(result).to.be.equal(false)
    })

    it("数组[1, 2, 3, 4, 5, 6]中没有大于100的元素", function () {
        const result = every(arr, n=> n<100)
        expect(result).to.be.equal(true)
    })
})
