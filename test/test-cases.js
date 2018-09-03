let test_cases = [
	{input: [1], expected:"Im Happy, I really am", message: "1-> Im Happy, I really am "},
	{input: [2], expected:"Im Unhappy, I really am", message: "2-> Im Unhappy, I really am "},
	{input: [3], expected:"Im Unhappy, I really am", message: "3-> Im Unhappy, I really am "},
	{input: [4], expected:"Im Unhappy, I really am", message: "4-> Im Unhappy, I really am "},
	{input: [10], expected:"Im Happy, I really am", message: "10-> Im Happy, I really am "},
	{input: ["10"], expected:"Im Happy, I really am", message: "'10'-> Im Happy, I really am "},
	{input: [9], expected:"Im Unhappy, I really am", message: "9-> Im Unhappy, I really am "},
	{input: [' '], expected:"Im Unhappy, I really am", message: "' '-> Im Unhappy, I really am "},
	{input: [null], expected:"Im Unhappy, I really am", message: "null-> Im Unhappy, I really am "},
	{input: ["19"], expected:"Im Happy, I really am", message: "'19'-> Im Happy, I really am "}
	// {input: ["19"], expected:"Im Unhappy, I really am", message: "'19'-> Im Unhappy, I really am "}
];

module.exports = test_cases;