'use strict'

// 1.
let firstArray = [1, 2, 3];
let secArray = [4, 5, 6];

console.log(firstArray.concat(secArray))

// 2.

firstArray.reverse()

console.log(firstArray)

// 3.
const a = [1,2,3]
a.push(4,5,6)
console.log(a)

// 4.
const b =[1,2,3]
b.unshift(4,5,6)
console.log(b)

// 5.
const c =  ['js','css', 'jq']
console.log(c[0])
console.log(c.shift())

// 6.
console.log(c.pop())

// 7.
const d =  [1, 2, 3, 4, 5]
const newArr = d.slice(0,3)
console.log(newArr)

// 8.
const newArrlast = d.slice(-2)
console.log(newArrlast)

// 9.
const l =  [1, 2, 3, 4, 5]
 l.splice(1,2)
console.log(l)

// 10.
const newArrlast1 = d.slice(1,4)
console.log(newArrlast1)

// 11.
const f =  [1, 2, 3, 4, 5]
f.splice(3,0 , 'a', 'b', 'c')
console.log(f)

// 12.
const g =[1, 2, 3, 4, 5]

g.splice(1,0,'a', 'b');
g.splice(6,0, 'c');
g.splice(8,0, 'e')

console.log(g)

// 13.
const h = [3, 4, 1, 2, 7]
h.sort()
console.log(h)

// 14.
const ar = [5, 6, 7, 8, 9]
const sum = ar.reduce((sum, current) => sum + current, 0)
console.log(sum)

// 15.
const square = ar.map(num => Math.pow(num , 2))
console.log(square)

// 16.

let t =  [1,-3, 5, 6,-7, 8, 9,-11]
let res = t.filter(num => num < 0)

console.log(res)

// 17.
res = t.filter(num => num % 2 === 0)
console.log(res)

// 18.
t = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
res = t.filter(index => index.length > 5)
console.log(res)

// 19.
t = [1, 2, [3, 4], 5, [6, 7]];
res = t.filter(string => Array.isArray(string))
console.log(res)

// 20.
t =  [5,-3, 6,-5, 0,-7, 8, 9]
res = t.filter(num => num < 0)
console.log(res.length)