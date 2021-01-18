const countBy = require('../lib/collection/countBy')
const expect = require('chai').expect
describe("countBy函数测试", function () {
    it("将一个集合进行分组", function () {
        const r = countBy([1, 2, 3, 4, 5], function(num) {
            return num % 2 == 0 ? 'even': 'odd';
        });
        const f ={odd: 3, even: 2}
        expect(JSON.stringify(f)).to.be.equal(JSON.stringify(r))
    })

})
