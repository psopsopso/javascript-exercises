const repeatString = function(str, num) {
    if (num === 0 || str === '') {
        return "";
    }
    else if (num > 0) {
        return str.repeat(num);
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
