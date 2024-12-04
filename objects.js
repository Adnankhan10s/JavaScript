const mysym = Symbol("Key1"); // Assign a Symbol
const obj1={
    name:"Adnan",
    email:"adnan112@gmail.com",
    age:27,
    [mysym]:"Symbol",
    hobby:["cricket" , "gaming", "travelling"],

}
// How to get Object values---
// console.log(obj1[mysym]);
// console.log(obj1);
// Assign new value o n existing object --
// obj1.email="tahrehman@gpt.com";
// console.log(obj1);
// Object.freeze(obj1); Freez object didnot change any value after freex object ----
// obj1.email="adnankhan@microsoft.com";
// console.log(obj1);
// Add function in object ----
obj1.greeting = function(){
    console.log(`Hellow world ${this.hobby[2]}`);
}
// call a function in object -----
console.log(obj1.greeting());

// How to assign two or more objects in single Object ----
const obj ={
    1:"A",
    2:"B",
    3:"C"
}
const obj2={
    4:"CX",
    5:"ER",
    6:"SC"
}
// Using assign operator ----
// const newobj =Object.assign({},obj , obj2) ;
// Using spread Operator Like array spread Operator ------
// const finalobj = {...obj ,...obj2};

// console.log(finalobj);
// it return all the object keys in an array
// console.log(Object.keys(obj));
// // it return all the object values in an array
// console.log(Object.values(obj2));
// Check Object Properties 
// console.log(obj.hasOwnProperty(2));
