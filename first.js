function test(a,b,c,d){
    console.log('fv eleje')
    console.log(a);
    console.log(b); 
    console.log(c); 
    console.log(d); 
    a = 23;
    b = "def";
    c.push(5);
    d.name = "John";
    console.log('fv vége')
    console.log(a);
    console.log(b); 
    console.log(c); 
    console.log(d); 
}

let a = 10;
let b = "abc";
let c = [1, 2, 3, 4];
let d = { name: "Peter" };

test(a, b, c, d);

console.log(a); // 10
console.log(b); // abc
console.log(c); // [1, 2, 3, 4, 5]
console.log(d); // { name: 'John' }
