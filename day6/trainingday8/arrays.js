// let user1 = "Harsha";
// let user2 = "Prajit";
// let user3 = "Prabhakar";
// let user4 = "Shailaja";

//console.log(user1);
//console.log(user2);
//console.log(user3);
//console.log(user4);


// let users = ["Rahul", "arjun", "karthik", "mahesh", "karthik"]
// console.log(users);
//console.log(users[2]);
//console.log(users[1]);



// for(let i=0; <users.length: i++)























let users = ["Sanjay", "Rahul", "mahesh", "karthik", "arjun"];
//users.map(user ,i)=>{
//    console.log(user  , i);
// })

// let x =users.map(user ,i)=>{
//     return user:
// });
//console.log(x);

let x = users.forEach(user,i)=>{
    //console.log(user);
    return user;
});
console.log(x);

let userData ={
    name:"rahul",
    age:25,
    city:"karimnagar"
};
console.log(userData.name , typeof(userData));

let X = JSON.stringify(userData);
console.log(x, typeof(x));

let y = JSON.parse(x);
console.log(y);