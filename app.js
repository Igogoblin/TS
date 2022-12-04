var test1 = 123;
var test2 = 456;
console.log(test1 + test2);
var arr0 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr0[0]);
var arr1 = [1, 2];
var arr2 = ['a', 'b'];
var arr3 = [1, 2];
var obj = { a: 1, b: 2, c: 3 };
// let res: number = 0;
function sum(arr) {
    var res;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        res += num;
    }
    return res;
}
function func(elem, text) {
    elem.textContent = text;
}
// кортежи ----------------------------------------------------------
// readonly - нельзя изменять
// необязательное значение ?
var user = ['john', 31];
var nam = user[0], age = user[1];
var tpl;
tpl = ['str', 1, 2, 3, 4, 5];
// user[0] = 'eric';
// console.log(user);
var time = [12, 59, 59];
// time[0] = 13;
console.log(time);
var user1;
user1 = ['eric', 31];
//  перечисления enum --------------------------------------------------
var Season;
(function (Season) {
    Season[Season["Winter"] = 0] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Autumn"] = 3] = "Autumn";
})(Season || (Season = {}));
;
var current = Season[0];
console.log(current); // 'Winter'
var current1 = Season.Winter;
console.log(current1); // 0
