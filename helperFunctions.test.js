const { mean, median, mode } = require("./helperFunctions");

describe("find mean", function() {
    test('array with set of numbers', function () {
        let arrMean = mean([1,2,3,3,4,5]);
        expect(arrMean).toEqual(3);
      });
    test('empty array', function () {
        let arrMean = mean([]);
        expect(arrMean).toEqual(0);
    });
})

describe("find median", function() {
    test('array with even set of numbers', function () {
        let arrMedian = median([1,2,4,8]);
        expect(arrMedian).toEqual(3);
      });
    test('array with odd set of numbers', function () {
        let arrMedian = median([1,2,3,4,5]);
        expect(arrMedian).toEqual(3);
    });
})

describe("find mode", function() {
    test('array with set of numbers', function () {
        let arrMode = mode([1,1,1,2,4,8]);
        expect(arrMode).toEqual(1);
      });
})

  
//   describe("#findMedian", function(){
//     it("finds the median of an even set", function(){ 
//       expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
//     })
//     it("finds the median of an odd set", function () { 
//       expect(findMedian([1, -1, 4])).toEqual(1)
//     })
//   })
  
//   describe("#findMean", function () {
//     it("finds the mean of an empty array", function () { 
//       expect(findMean([])).toEqual(0)
//     })
//     it("finds the mean of an array of numbers", function () { 
//       expect(findMean([1,-1,4,2])).toEqual(1.5)
//     })
//   })
  
//   describe("#findMode", function () {
//     it("finds the mode", function () { 
//       expect(findMode([1,1,1,2,2,3])).toEqual(1)
//     })
//   })