const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    }
    let sum = 0;
    lowerBound = Math.min(num1, num2);
    upperBound = Math.max(num1, num2);
    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
