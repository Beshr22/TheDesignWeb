var Some = function (v) {
    return ({ kind: 'left', v: v });
};
var None = function () {
    return ({ kind: 'right', v: false });
};
var x = None();
var y = null;
y + 1;
if (x.kind == 'left') {
    x.v + 1;
}
var sumUpTo = function (n) {
    if (n <= 1)
        return n;
    return n + sumUpTo(n - 1);
};
var drb = function (n) {
    if (n <= 1)
        return 1;
    return n * drb(n - 1);
};
console.clear();
console.log(sumUpTo(4));
console.log(drb(4));
