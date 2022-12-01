let test1: number = +'123';
let test2: number = +'456';

console.log(test1 + test2);

let arr: string[] = ['a', 'b', 'c', 'd', 'e'];
console.log(arr[0]);

let arr1: number[] = [1,2];

let arr2: Array<string> = ['a','b'];
let arr3: Array<number> = [1,2];

let obj = {a: 1, b: 2, c: 3};
let res: number = 0;

for (let key in obj) {
	let elem: number = obj[key];
	res += elem;
}

console.log(res);

