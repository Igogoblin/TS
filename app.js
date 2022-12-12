var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var userT = {
    name: 'sd',
    age: 22,
    skils: ['1', '2'],
    id: 1
};
var userInt = {
    name: 'sara',
    age: 43,
    roleId: 34,
    place: 'here',
    log: function (id) {
        return '';
    }
};
var user12 = {
    login: 'a@a.ru'
};
function multiply(first, second) {
    return first * second;
}
var PaymandStatus;
(function (PaymandStatus) {
    PaymandStatus["Success"] = "success";
    PaymandStatus["Failed"] = "failed";
})(PaymandStatus || (PaymandStatus = {}));
// void - ничего не возвращает или игнорирует возврат----------------------------------------------
// unknown вход не понятен 
var inputUnk;
inputUnk = 2;
inputUnk = ['d', 's'];
// let re: string = inputUnk;//false
function getData( /*params:type*/) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch('')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof Error) {
                        console.log(error_1.message);
                    }
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// never      никогда  не должно произойти (пример зацикливание)-----------------------------------------
function generatError(message) {
    throw new Error(message);
}
function dumpError() {
    while (true) { }
}
// null  how as js
// type guard мы говорим что уверены что это так для проверки ---------------------
function isString(x) {
    return typeof x === 'number';
    // упустили If else на стринг
}
console.log(isString('2'));
