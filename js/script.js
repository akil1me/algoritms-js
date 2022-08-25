// 1 vazifa short + long + short
function shortLongShort(a, b) {
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}

let result = shortLongShort("1111", "22");

console.log(`1-vazifa: ${result}`);

// 2 vazifa positive + positive
let arr = [5, 2, -99, 12, 13]
let positiveArr = []

function positiveArrSum() {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveArr.push(arr[i])
    }
  }
  positiveArr.forEach(positive => {
    return sum += positive;
  })

  console.log(`2-vazifa: ${positiveArr.join(" + ")} = ${sum}`);
  return sum

}
positiveArrSum()

// 3 vazifa  reverseMaxNum
let reverseMaxNum = n => {
  let arrMax = [];
  for (let i = n; i > 0; i--) {
    arrMax.push(i);
  } return arrMax;
};
console.log(`3-vazifa: ${reverseMaxNum(9).join(", ")}`);

// 4 vazifa  remove fitst index end last index
function removeText(text) {
  let removed = text.split(" ").slice(1, -1);
  return removed
}
let resultText = removeText("O'zbekiston toshkent poytaxti");

console.log(`4-vazifa: ${resultText}`);


// 5 vazifa repeat text
function repeatStr(num, text) {
  let repeat = text.repeat(num);
  return repeat;
}

let resultRepeatText = repeatStr(2, 'Akobir');

console.log(`5-vazifa: ${resultRepeatText}`);
