const groupBy = require('../lib/collection/groupBy')
const expect = require('chai').expect
describe("groupBy函数测试", function () {
    it("将一个集合进行分组", function () {
        const r = groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
        const f ={1: [1.3], 2: [2.1, 2.4]}
        expect(JSON.stringify(f)).to.be.equal(JSON.stringify(r))
    })

})
