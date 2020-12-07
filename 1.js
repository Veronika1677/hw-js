var message = "";
var message2 = "";
var num1 = "6543";

function Lucky(num1, num2) {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (num2[i] == num1[i]) {
               
                    message += "+";
                    num1=num1.replace(num1[i], "0");
                    break;
            }
            else{
                if (num2[i] == num1[j] && j!=i) {
                    message2 += '-';
                    num1=num1.replace(num1[j], "0");
                    break;
                }
            }
        }
    }
}
Lucky(num1, prompt('Введите число'));
alert(message+message2);