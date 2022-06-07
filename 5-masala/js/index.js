let arr = [-1, 3, 5];

function getLeftNumbers() {
  const res = [];
  let min;
  let max;
  max = arr[0];
  min = max;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  for (let i = min; i <= max; i++) {
    let isThere = false;
    for (let j = 0; j < arr.length && !isThere; j++) {
      if (arr[j] == i) isThere = true;
    }
    if (!isThere) res.push(i);
  }
  return res;
}

console.log(getLeftNumbers(arr));
