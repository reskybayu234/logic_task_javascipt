/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];
// const data = [2, 1, 1];
const dd = data.length;
var sort = [];
function result(data) {
  var sort = data.sort();
  for (let i = 0; i < dd; i++) {
    if (sort[i] == sort[i + 1]) {
      data.splice(i + 1, 1);
    }
  }
  console.log("result 1 :   " + data);
}

console.log(result(data));

// ================================================================================================
// ================================================================================================
// ================================================================================================
// ================================================================================================

const data1 = [1, 4, 2, 3, 5, 3, 2, 4];
const dd1 = data1.length;
var sort1 = [];
function result1(data1) {
  var sort1 = data1.sort();
  for (let i = 0; i < dd1; i++) {
    for (let j = 1; j < dd1; j++) {
      if (sort1[i] == sort1[i + 1]) {
        data1.splice(i, 2);
      }
    }
  }
  console.log("result 2 :   " + data1);
}

console.log(result1(data1));
