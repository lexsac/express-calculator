function mean(arr) {
    let sum = arr.reduce((acc, val) => {
        return acc + val;
    }, 0);

    let mean = sum / arr.length;
    return mean;
}

function median(arr) {
    let sortedArr = arr.sort();
    let median;
    if (sortedArr.length % 2 === 0) {
        let firstNum = sortedArr[(sortedArr.length / 2) - 1];
        let secondNum = sortedArr[(sortedArr.length / 2)];
        median = (firstNum + secondNum) / 2;
    } else {
        let modeIdx = Math.floor(sortedArr.length / 2);
        median = sortedArr[modeIdx];
    }
    return median;
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

    return mostFrequent;
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