// 1. https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript 
function stringToArray(string) {
  var arrayString = string.split(" ");
  return arrayString;
}

// 2. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
function DNAtoRNA(dna) {
  var rna = dna.replace(/T/g, "U");
  return rna;
}
// 3. https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = (list) => Math.min(...list);

const max = (list) => Math.max(...list);

// 4. https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
function min(arr, toReturn) {
  let min = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  if (toReturn === "value") {
    return min;
  }
  if (toReturn === "index") {
    return index;
  }
}

// 5. https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
function warnTheSheep(queue) {
  let wolfNumber = queue.indexOf("wolf");
  let sheepNumber = queue.length - wolfNumber - 1;

  if (wolfNumber === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
}
