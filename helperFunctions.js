function mean(arr) {
    if(arr.length === 0) return 0;
    let sum = arr.reduce((acc, val) => {
        return acc + val;
    }, 0);

    let mean = sum / arr.length;
    return mean;
}

function median(arr) {
    let sortedArr = arr.sort();
    let middleIdx = Math.floor(sortedArr.length / 2);
    let median;
  
    if (arr.length % 2 === 0) {
      median = (sortedArr[middleIdx] + sortedArr[middleIdx - 1]) / 2;
    } else {
      median = sortedArr[middleIdx];
    }
    return median
}

function mode(arr) {
    const counter = {};

    for (let num of arr) {
        if (counter[num]) {
            counter[num] += 1;
        } else {
            counter[num] = 1;
        }
    }

    let count = 0;
    let mostFrequent;
  
    for (let key in counter) {
      if (counter[key] > count) {
        mostFrequent = key;
        count = counter[key];
      }
    }

    return +mostFrequent;
};

function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }

module.exports = {
    mean,
    median,
    mode,
    convertAndValidateNumsArray
  };