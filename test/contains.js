const contains = require('../lib/collection/contains')
const expect = require('chai').expect
describe("contains函数测试", function () {
    it("传入的数组为空", function () {
        const result = contains([], 3)
        expect(result).to.be.equal(false)
    })
    it("传入的数组为null", function () {
        const result = contains(null, 3)
        expect(result).to.be.equal(false)
    })

    it("传入的数组为[1,2,3]", function () {
        const result = contains([1, 2, 3], 3)
        expect(result).to.be.equal(true)
    })

    it("从数组的第二个元素开始检索", function () {
        const result = contains([1, 2, 3, 4], 4, 1)
        expect(result).to.be.equal(true)
    })

    it("从数组的第三个元素开始检索", function () {
        const result = contains([1, 2, 3, 4], 1, 2)
        expect(result).to.be.equal(false)
    })

    it("开始检索的位置大于数组的中的元素的数量", function () {
        const result = contains([1, 2, 3, 4], 1, 7)
        expect(result).to.be.equal(false)
    })
})
