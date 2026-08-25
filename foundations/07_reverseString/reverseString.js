const reverseString = function(string) {
    let reversedString = string.split("").reverse().join("");

    return reversedString;
};

reverseString("como estas");

// Do not edit below this line
module.exports = reverseString;
