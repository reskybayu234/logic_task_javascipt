/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ["flower", "flow", "flight"];
var len = words.length;
function result(words) {
  var i = 0;
  if (words[i][i] == words[i + 1][i] && words[i + 1][i] == words[i + 2][i]) {
    console.log("fl");
  }
}

console.log(result(words));
