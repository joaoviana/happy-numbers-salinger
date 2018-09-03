
function howAreYaAnyway(number) {

     do{

        if(number < 5) {
             break; 
        } 

        number = String(number);
        let thisNextNumber = 0;

        for(var i = 0 ; i < number.length; i++) {
            let squared_numbers = number[i] * number[i];
            thisNextNumber = thisNextNumber + squared_numbers;
        }

        number = thisNextNumber;

    } while(true)

    let string_result;
    let string_H = 'H';
    let string_Unh = 'Unh';

    if (number == 1){
        string_result = "I'm" + string_H + "appy, I really am";
    } else {
        string_result = "I'm" + string_Unh + "appy, I really am";
    }

    return string_result;
}


