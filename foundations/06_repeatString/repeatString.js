const repeatString = function(string, num) {
    let repeatedString = "";
    
    if (num < 0) {
        return ("ERROR");
    }

    while (num > 0) {
        repeatedString += string;
        num--;
    }

    return repeatedString;
};

repeatString("hello", 3);

// Do not edit below this line
module.exports = repeatString;
