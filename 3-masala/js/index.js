let salaries = {
  Akmal: 1200,
  Salim: 5200,
  Karima: 1800,
};

function sumSalaries(object) {
  let arr = Object.values(object);

  console.log(arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(sumSalaries(salaries)); // Natija: 8200 -> chiqishi kk
