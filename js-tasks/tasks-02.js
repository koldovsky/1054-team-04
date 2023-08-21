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
var min = function (list) {
  let min = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < min) {
      min = list[i];
    }
  }
  return min;
};

var max = function (list) {
  let max = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  return max;
};

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
