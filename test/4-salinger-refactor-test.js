const assert = require('tressa');

const cases = require('./test-cases.js');

const salinger_refactor = require("../4-salinger-refactor.js");

assert.title('salinger_refactor');


for (let cond of cases) {
	assert(salinger_refactor(...cond.input) === cond.expected, cond.message);
};
