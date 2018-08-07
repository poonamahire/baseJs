var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x, 'Y:' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value shoud not less than 0');
            point.x=value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
let point:Point=new Point(1,2);
let x=point.X;
point.X=10;
