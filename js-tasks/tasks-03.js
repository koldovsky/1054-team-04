// 1.https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// 2.https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

// 3. https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
  let newArr = [];
  for (let key in obj) {
    if (key.length === 5) {
      newArr.push(key);
    }
    if (obj[key].length === 5) {
      newArr.push(obj[key]);
    }
  }
  return newArr;
}
