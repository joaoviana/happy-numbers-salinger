const assert = require('tressa');

const cases = require('./test-cases.js');

const salinger = require("../1-salinger.js");

assert.title('salinger');

for (let cond of cases) {
	assert(salinger(...cond.input) === cond.expected, cond.message);
};
 