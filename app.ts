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

