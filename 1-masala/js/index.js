let values = [
  prompt("Birinchi qiymatni kiriting!"),
  prompt("Ikkinchi qiymatni kiriting!"),
  prompt("Uchinchi qiymatni kiriting!"),
  prompt("To'rtinchi qiymatni kiriting!"),
];

function elResult() {
  let sum = 0;

  for (let element of values) {
    if (isNaN(element * 1) || element === " " || element === "") {
      return null;
    } else {
      sum = sum + element * 1;
    }
  }
  return sum;
}

console.log(elResult());
