
let closure = {
    check_if_unhappy(number){
        if (number < 5) {
            return true;
        } else
            return false;
    },
    find_next_number(number){
        let result;

        number = String(number);

        let thisNextNumber = 0;
    
        for(var i = 0 ; i < number.length; i++) {
            let squared_numbers = number[i] * number[i];
            thisNextNumber = thisNextNumber + squared_numbers;
        }
    
        result = thisNextNumber;
        return result;
    },
    create_result_string(number) {
        let result;
        let string_H = 'H';
        let string_Unh = 'Unh';
        if (number == 1){
            result = "I'm" + string_H + "appy, I really am";
        } else {
            result = "I'm" + string_Unh + "appy, I really am";
        }

        return result;
    }
};

let args = {
    number: undefined
};

let happy_or_unhappy;
{
    let ret_val;
    
    howAreYaAnyway: {
    
        do{
            if(closure.check_if_unhappy(args.number)){
                break;
            }
            args.number = closure.find_next_number(args.number);
        } while(true)
        
        ret_val = closure.create_result_string(args.number);
    
        break howAreYaAnyway;
    };
    happy_or_unhappy = ret_val;
}    

