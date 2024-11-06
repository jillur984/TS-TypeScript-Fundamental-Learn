// let users:{
//     id:number,
//     name:string,
//     age:number
// }[]=[] // that means ei 3 type sara onno kisu ei array of object a dukanu jabe na
var users = []; // that means ei 3 type sara onno kisu ei array of object a dukanu jabe na
var user1 = {
    id: 1,
    name: "Anisul Islam Sir",
    age: 32
};
var user2 = {
    id: 1,
    name: "Abul Kalam Sir",
    age: 50
};
users.push(user1);
users.push(user2);
var printUserInfo = function (user) {
    console.log("User id= ".concat(user.id, ",name=").concat(user.name, ",age=").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
// which item are many that time i assign a template as like variable and use all over the application
