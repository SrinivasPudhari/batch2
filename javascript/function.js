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

var a =10;
let b=45;
function x(){
    var user = "thata";
    let company = "google";
    const sal = 1234567890;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a , b);
}
x();