"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
const res = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '!')
    .reduce((a, b) => a + b);
console.log(res);
