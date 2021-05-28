const { expect } = require('chai')
const {EllysBalancedStrings} = require('./index')

describe("EllysBalancedStrings", function() {
    it("0) should return 1 for string 'TOPCODER'", () => {
        var example1 = 'TOPCODER';
      expect(EllysBalancedStrings(example1)).to.equal(1);
    })

    it("1) should return 0 for string 'BANANA'", () => {
        var example2 = 'BANANA';
      expect(EllysBalancedStrings(example2)).to.equal(0);
    })

    it("2) should return 2 for string 'WITHOUTITIAMJUSTESPR'", () => {
        var example3 = 'WITHOUTITIAMJUSTESPR';
      expect(EllysBalancedStrings(example3)).to.equal(2);
    })
    
    it("3) should return 5 for string 'NOZAPHODJUSTVERYVERYIMPROBABLE'", () => {
        var example4 = 'NOZAPHODJUSTVERYVERYIMPROBABLE';
      expect(EllysBalancedStrings(example4)).to.equal(5);
    })


  })

describe('Verify length of string', () => {
  test('Verify minimum length string', () => {
    expect(changeStr.length).toBeGreaterThanOrEqual(2)
  })

  test('Verify maximum length string', () => {
    expect(changeStr.length).toBeLessThanOrEqual(100)
  })
})