var test1 = +'123';
var test2 = +'456';
console.log(test1 + test2);
var arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr[0]);
var arr1 = [1, 2];
var arr2 = ['a', 'b'];
var arr3 = [1, 2];
var obj = { a: 1, b: 2, c: 3 };
var res = 0;
for (var key in obj) {
    var elem = obj[key];
    res += elem;
}
console.log(res);
