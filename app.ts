let test1: number = 123;
let test2: number = 456;

console.log(test1 + test2);

let arr0: string[] = ['a', 'b', 'c', 'd', 'e'];
console.log(arr0[0]);

let arr1: number[] = [1,2];

let arr2: Array<string> = ['a','b'];
let arr3: Array<number> = [1,2];

let obj = {a: 1, b: 2, c: 3};
// let res: number = 0;

function sum(arr:Array<number>):number {
	
	let res:any;
	for (let num of arr) {
		res += num;
	}
	
	return res;
}

function func(elem: HTMLElement, text: string):void {
	elem.textContent = text;
}

// кортежи ----------------------------------------------------------
// readonly - нельзя изменять
// необязательное значение ?
let user:  [string, number] = ['john', 31];
let [nam, age] = user;
let tpl: [string,...number[]];
tpl = ['str', 1, 2, 3, 4, 5];
// user[0] = 'eric';
// console.log(user);
let time: readonly [number, number, number] = [12, 59, 59];
// time[0] = 13;
console.log(time);
let user1: [string, number, boolean?];
user1 = ['eric', 31];
//  перечисления enum --------------------------------------------------
enum Season { Winter, Spring, Summer, Autumn };
// let current: string = Season[0];
// console.log(current); // 'Winter'
let current1: number = Season.Winter;
console.log(current1); // 0
let current: Season = 7;// not error
//  any ---------------------------------------------------------------
let testAny: any=123;
testAny = 'avb';
let testOr: string | number;
testOr = 123;
testOr = 'abc';
// type ----------------------------------------------------------------
type stumber = string | number;
let testType: stumber = 123;
// let stumber: 'suc'|'error';
let myStr: 'suc'|'warn'|'errr';
type message = 'success'| 'error';
let mStr: message = 'success';
// 
let list: number[] =[1,2,3];
// type or interface
// type calculator = (x: number, y: number) => number;
interface calculator {
  (x:number, y:number):number;
}
let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;
console.log("interface: "+addNumbers(1,2))
let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
console.log(doCalculation('add')(1, 2));
// обьявление этим операторов идентичны(равны)
// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let addNumbers: Calculator = (num1, num2) => num1 + num2;

const skills: string[] = ['dev', 'devops', 'testing'];

let res = skills
.filter(s=>(s!='testing'))
.map(s=>s+"! ")
.reduce((a,b)=>a+b);
console.log("res: ", res);
const skillsD: Array<string>=['d','do'];
// enum -----------------------------------------------------------------------


enum StatusCode {
    SUCCESS="s",
    IN_PROCESS=2,
    FAILD,
}

const resStatus={
    message: 'платеж успешен',
    statusCode: StatusCode.SUCCESS
}
function action(status: StatusCode.SUCCESS){}
action(StatusCode.SUCCESS);
// типизировать функцию --------------------------------------------
/* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
/* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]

/* 
async function getFaqs(req) {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
*/
enum QustionStatus {
    PUBLICHED="publiched",
    DRAFT ="draft",
    DELETED ="deleted"
}

async function getFaqs(req:{
topicId:number;
status?:QustionStatus
}):Promise<{
qustion:string;
answer: string;
tags: string[];
likes:number;
status: QustionStatus;
}[]>{
    const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}
// union     string|number        ---------------------------------------------------------------------
// literal types         let 1 = 1-------------------------------------------------------
type User = {
    name: string;
    age: number;
    skils:string[];
}
type Role = {
    id:number;
}
type UserWithRole = User & Role;
let userT = {
    name: 'sd',
    age: 22,
    skils: ['1','2'],
    id:1
};
// interface ---------------------------------------------------------------------
interface Us {
    name: string,
    age: number,
    log:(id:number)=>string;
}
interface UsInt {
    place:string
}
interface UserWithInt extends Us,UsInt {
    roleId:number
}
let userInt: UserWithInt ={
    name:'sara',
    age: 43,
    roleId:34,
    place: 'here',
    log(id){
        return '';
    }
}
// в интерфейс можно добавлять данные интерфейса(доопределение) работа с обьк, масс
// в интерфейсе можно использовать union |  можно работать с примитивными типами
interface UserUs {
    login: string,
    password?: number;
}

const user12: UserUs={
    login:'a@a.ru',
}

function multiply(first:number,second:number):number{
return first*second;
}
// 
// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

interface Paymand {
    sum: number;
    from: number;
    to: number;
}
interface IPaymantRequest extends Paymand {
    
}
enum PaymandStatus {
    Success = 'success',
    Failed = 'failed'
}
interface IDataSuccess {
    databaseId: number;
	sum: number;
	from: number;
	to: number;
}
interface IDataFaild {
    errorMessage:string;
    errorCode: number;
}
interface IResponse {
status: PaymandStatus;
data: IDataSuccess|IDataFaild;
}
// void - ничего не возвращает или игнорирует возврат----------------------------------------------
// unknown вход не понятен 
let inputUnk: unknown;
inputUnk = 2;
inputUnk = ['d','s'];
// let re: string = inputUnk;//false
async function getData(/*params:type*/) {
    try {
        await fetch('');
    } catch (error){          //unknown 
        if(error instanceof Error){
          console.log(error.message)  
        }
    }
}
type u1 = unknown | number; // unknown
type u2 = unknown & string; //string