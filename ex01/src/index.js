let myArr = [];
function* multiplication(x) {
  for (var i = 1 + x; i >= 0; i--) {
    yield (x *= 2);
    myArr.push(x);
  }
  return x;
}
var num = multiplication(3);

for (var i = 1; i < 4; i++) {
  console.log(num.next().value);
}

module.exports = multiplication;
