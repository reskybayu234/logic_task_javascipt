/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const length = numbers.length;
var arr = [];
var arr1 = [];
function result(numbers) {
  arr = numbers.sort();
  for (let i = 0; i <= length; i++) {
    if (arr[i] != i) {
      arr1 = i;
      console.log(arr1);
      break;
    }
  }
}

console.log(result(numbers));
