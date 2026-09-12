const fibonacci = function(num) {
    const index = Number(num);
    if (index < 0) return "OOPS";
    if (index === 0) return 0;

    let result = [1, 1];

    if (index <= 2) {
        return result[index - 1];
    }

    for (let i = 2; i < index; i++) {
        let last = result[result.length - 1];
        let previous = result[result.length - 2];
        result.push(last + previous);
    }

    return result[result.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
