const removeFromArray = function(arr, ...item) {
    for (arg of item) {
        item_index = arr.indexOf(arg);
        if (item_index != -1) {
            arr.splice(item_index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
