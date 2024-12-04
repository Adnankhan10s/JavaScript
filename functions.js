

// function addnum (num1 , num2){
//  return num1+num2;
// }
// // console.log(loginUser("Adnan"));
// const result = addnum(2,8);
// console.log(result);

// If we donot return values in function it return undefines
// function addnum (num1 , num2) {
//          num1+num2
// }
// const result = addnum(5,3);
// console.log(result);

// if i return function output then result store in variable 
function addnum (num1 , num2) {
   return num1+num2
}
const result = addnum(5,3);
console.log(result);

function isLoggedIn (username){
       if (!username) {
        return console.log("Please Enter a UserName");
       }
     return `${username} Just Logged In`;
}
const log = isLoggedIn("AdnanKhan");
console.log(log);