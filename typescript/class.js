var Engine = function () {
    return {
        bhp: 1000,
        oilcool: true
    };
}();
var Car = function (eng) {
    return { Engine: Engine };
};
