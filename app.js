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
// let current: string = Season[0];
// console.log(current); // 'Winter'
var current1 = Season.Winter;
console.log(current1); // 0
var current = 7; // not error
//  any ---------------------------------------------------------------
var testAny = 123;
testAny = 'avb';
var testOr;
testOr = 123;
testOr = 'abc';
var testType = 123;
// let stumber: 'suc'|'error';
var myStr;
var mStr = 'success';
// 
var list = [1, 2, 3];
var addNumbers = function (x, y) { return x + y; };
var subtractNumbers = function (x, y) { return x - y; };
console.log("interface: " + addNumbers(1, 2));
var doCalculation = function (operation) {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));
// обьявление этим операторов идентичны(равны)
// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let addNumbers: Calculator = (num1, num2) => num1 + num2;
var skills = ['dev', 'devops', 'testing'];
var res = skills
    .filter(function (s) { return (s != 'testing'); })
    .map(function (s) { return s + "! "; })
    .reduce(function (a, b) { return a + b; });
console.log("res: ", res);
var skillsD = ['d', 'do'];
// enum -----------------------------------------------------------------------
var StatusCode;
(function (StatusCode) {
    StatusCode["SUCCESS"] = "s";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILD"] = 3] = "FAILD";
})(StatusCode || (StatusCode = {}));
var resStatus = {
    message: 'платеж успешен',
    statusCode: StatusCode.SUCCESS
};
function action(status) { }
action(StatusCode.SUCCESS);
