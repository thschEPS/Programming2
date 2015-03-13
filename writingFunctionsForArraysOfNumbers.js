function findNumber() {
  var jNum = [8, 6, 7, 5, 3, 0, 9];
  biggestNumberInArray(jNum);
  arrayAverage(jNum);
}
function biggestNumberInArray(jNum) {
  var bigNum = 0; 
  for (var i = 0; i < jNum.length; i++) {
    if (jNum[i] > bigNum) {
      bigNum = jNum[i];     
    }
  }
  console.log(bigNum);
}
function arrayAverage(jNum) {
  var sum = 0; 
  for (var i = 0; i < jNum.length; i++) {
    sum = jNum[i] + sum;
  }
  sum = (sum/(jNum.length)).toFixed(2);
  console.log(sum);
}
findNumber();
