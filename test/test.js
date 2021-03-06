const { assert } = require('chai');

describe( "Array", () => {
    describe( 'indexOf()', () => {
        it("should return -1 when the value is not present", () => {
            assert.equal(-1, [1,2,3].indexOf(4));
        })
    });

    describe("length", () => {
       it("should not be 0", () => {
           assert.notEqual(0, [1,2,3].length)
       }) 
    });

});