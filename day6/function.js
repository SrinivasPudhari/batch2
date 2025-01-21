// ! higher order function & callback function.
function hof(a){
    return a;
}
let x = hof(function(){return "Callback function"});
console.log(x);

let y = function(){return "Callback function"};
console.log(y());

let users = ["mahesh" , "arjun" , "varun" , "sandeep" , "karthik"];
console.log(users);
users.map(function(user){console.log(user)})