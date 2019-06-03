const assert=require('chai').assert;
const Thanos=require('../model/Thanos');

describe('Thanos Array test',()=>{
    let thanos;
    beforeEach(()=>{
        thanos=new Thanos();
     
    });

    it('Array is sorted',()=>{
        assert.equal(thanos.isSorted([1,1,1,1,2,3,3,4,5,7,12]),true);
    });

    it('Array is not sorted',()=>{
        assert.equal(thanos.isSorted([1,1,3,1,2,3,3,4,2,7,12]),false);
    });

    it('compare size true',()=>{
        thanos.compareSize(5)
        assert.equal(thanos.getLength(),5)

        thanos.compareSize(6)
        assert.equal(thanos.getLength(),6)

        thanos.compareSize(2)
        assert.equal(thanos.getLength(),6)
    });

    it('compare size false',()=>{
        thanos.compareSize(5)
        assert.equal(thanos.getLength(),5)

        thanos.compareSize(3)
        assert.notEqual(thanos.getLength(),3)
    })

   it('thanos sort first attempt',()=>{
        thanos.solve([1,2,2,4]);
        assert.equal(thanos.getLength(),4);
   });

   it('thanos sort 2nd attempt',()=>{
        thanos.solve([11,12,1,2,13,14,3,4])
        assert.equal(thanos.getLength(),2);
   });

   it('thanos sort 3rd attempt',()=>{
        thanos.solve([7,6,5,4]);
        assert.equal(thanos.getLength(),1);
   });

   it('thanos sort 4th attempt',()=>{
       thanos.solve([63 ,42, 13, 15, 39, 42, 42, 44, 46, 56, 58, 62, 67, 82, 84, 93]);
       assert.equal(thanos.getLength(),8);
   })
})