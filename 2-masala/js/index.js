let arr = ["Jazz", "Blues"];
console.log(arr);

arr.push("Rock-n-roll");
console.log(arr);

function myFunction(numberOfItems) {
  return (numberOfItems - 1) / 2;
}
arr[myFunction(arr.length)] = "Classics";
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("Rap", "Reggae");
console.log(arr);
