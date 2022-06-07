let arr = [1, 2, 3, 4, 5];
const nullArr = [];
const result = [];

function arrResult() {
  let sum = 0;
  let oddSum = 0;

  for (let element of arr) {
    if (typeof element === "object") {
      return nullArr;
    } else if (element % 2 === 0) {
      sum = sum + element;
    } else {
      oddSum = oddSum + element;
    }
  }

  if (isNaN(oddSum)) {
    return nullArr;
  } else {
    result.push(sum, oddSum);

    return result;
  }
}

console.log(arrResult());
