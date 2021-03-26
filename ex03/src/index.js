let generatorArray = [];
function* myGenerator() {
  yield* [1, 2, 3, 4, 5];
  yield* "Arena";
  yield* (arguments = [6, 7, 8]);
}
const iterator = myGenerator();

for (var i = 0; i < 13; i++) {
  generatorArray.push(iterator.next());
}

console.log(generatorArray);


module.exports = { generatorArray, myGenerator };
