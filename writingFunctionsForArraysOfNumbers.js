
var jennyNum = [8, 6, 7, 5, 3, 0, 9];
console.log(biggestNumberInArray(jennyNum));
console.log(arrayAverage(jennyNum)); 

function biggestNumberInArray(jennyNum) {
  var bigNum = 0; 
  for (var i = 0; i < jennyNum.length; i++) {
    if (jennyNum[i] > bigNum) {
      bigNum = jennyNum[i];     
    }
  }
  return bigNum;
}
function arrayAverage(jennyNum) {
  var sum = 0; 
  for (var i = 0; i < jennyNum.length; i++) {
    sum = jennyNum[i] + sum;
  }
  sum = (sum/(jennyNum.length)).toFixed(2);
  return sum;
}





