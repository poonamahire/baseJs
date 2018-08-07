"use strict";
exports.__esModule = true;
var count = /** @class */ (function () {
    //num:number=0;
    //count:number=0;
    function count(num, count) {
        this.num = num;
        this.count = count;
    }
    count.prototype.counterincrement = function () {
        // console.log('NUM:'+this.num,'COUNT:'+this.count);
        var button = document.getElementById("clickme"), count = 0;
        button.onclick = function () {
            count += 1;
            button.innerHTML = "Click me: " + count;
        };
    };
    return count;
}());
exports.count = count;
