"use strict";
exports.__esModule = true;
var counter_1 = require("@typescript/counter");
counter_1.Component({
    selector: 'custom-counter',
    template: "\n    <button (click)=\"decrement()\">-</button>\n    <span>{{counter}}</span>\n    <button (click)=\"increment()\">+</button>\n  "
});
var count = /** @class */ (function () {
    function count() {
        this.counterValue = 0;
        this.counterChange = new counter_1.EventEmitter();
    }
    Object.defineProperty(count.prototype, "count", {
        get: function () {
            return this.counterValue;
        },
        set: function (val) {
            this.counterValue = val;
            this.counterChange.emit(this.counterValue);
        },
        enumerable: true,
        configurable: true
    });
    count.prototype.decrement = function () {
        this.count--;
    };
    count.prototype.increment = function () {
        this.count++;
    };
    return count;
}());
exports.count = count;
