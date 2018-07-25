// tape is required to be used as the tets framework
var test = require('tape');
// this is where the test.js file and the logic.js files are connected
var logic = require('./logic');

test('Example test', function(t) {
  const actual = 1;
  const expected = 1;
  t.pass(actual, expected, "1 should return 1");
  t.end();
});

// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });
