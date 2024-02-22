const add = function (first, second) {
    return Number(first + second);
};

const subtract = function (first, second) {
    return Number(first - second);
};

const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {

    return array.reduce((total, current) => total * current);
};

const power = function () {

};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
