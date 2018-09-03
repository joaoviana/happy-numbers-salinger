const assert = require('tressa');

const cases = require('./test-cases.js');

const salinger_tracible = require("../5-salinger-tracible.js");

assert.title('salinger_tracible');


for (let cond of cases) {
	console.log(salinger_tracible(...cond.input));
	assert(salinger_tracible(...cond.input) === cond.expected, salinger_tracible(...cond.input, true));
};
