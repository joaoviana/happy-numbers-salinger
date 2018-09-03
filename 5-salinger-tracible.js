function howAreYaAnyway(number, trace) {
    let result; 

    if (trace) {
		result = {}
		result.args = {
			number
		}
	};
    
    if(trace){
        var step_number = 1;
    }
    do{
        if(check_if_unhappy(number)){
            break;
        }
        if(trace){
           let trace_number = number.toString();
           let array_number = trace_number.split("");
           let accumulator = 0;
           for(var i = 0 ; i < trace_number.length; i ++){
               accumulator += Math.pow(array_number[i],2) ;
           }

           array_number.push(accumulator);
           result[step_number] = array_number;
           step_number++;
        }
        number = find_next_number(number);
        
    } while(true)
    

    let final_value = create_result_string(number);
    
    if(trace){
        result.result =  final_value;
    } else 
        result =  final_value;

    return result;
};

module.exports = howAreYaAnyway;

console.log(howAreYaAnyway(19, true));

function check_if_unhappy(number){
    if (number < 5) {
        return true;
    } else
        return false;
};

let check_if_unhappy_test_cases = [
    {input: [1], expected: {boolean: true}, message: "[1] -> {boolean:true}"},
    {input: [5], expected: {boolean: false}, message: "[5] -> {boolean:false}"},
    {input: [6], expected: {boolean: false}, message: "[6] -> {boolean:false}"} 
];


function find_next_number(number){
    let result;

    number = String(number);

    let thisNextNumber = 0;

    for(var i = 0 ; i < number.length; i++) {
        let squared_numbers = number[i] * number[i];
        thisNextNumber = thisNextNumber + squared_numbers;
    }

    result = thisNextNumber;
    return result;
};

let find_next_number_test_cases = [
    {input: [12], expected: {number: 5}, message: "[12] -> {number:5}"},
    {input: [6], expected: {number: 36}, message: "[6] -> {number:36}"},
    {input: [24], expected: {number: 20}, message: "[24] -> {number:20}"} 
];

function create_result_string(number) {
    let result;
    let string_H = 'H';
    let string_Unh = 'Unh';
    if (number == 1){
        result = "Im " + string_H + "appy, I really am";
    } else {
        result = "Im " + string_Unh + "appy, I really am";
    }
    return result;
};

let create_result_string_test_cases = [
    {input: [1], expected: {string: "Im Happy, I really am"}, message: "[1] -> {string:Im Happy, I really am}"},
    {input: [2], expected: {string: "Im Unhappy, I really am"}, message: "[2] -> {string:Im Unhappy, I really am}"}
];