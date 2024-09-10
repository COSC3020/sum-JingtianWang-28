const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('sum.js')+'');

const testSum =
    jsc.forall("array nat", function(arr) {
        return JSON.stringify(sum(arr)) == JSON.stringify(arr.reduce(function(a, b) { return a + b; }, 0));
    });

jsc.assert(testSum);

console.log("Sum of [1, 2, 3]: ", sum([1, 2, 3]));
