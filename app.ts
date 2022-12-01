let test1: number = +'123';
let test2: number = +'456';

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