// let users: object[];

// users = [];


// let user1:{userName:string,id:number};
// user1={
//     userName:"Md. Jillur Rahman",
//     id:101
// }
// users.push(user1)
// let user2:{userName:string,id:number};
// user2={
//     userName:"Md. Abdul Muhit",
//     id:102
// }
// users.push(user2)
// let user3:{userName:string,id:number};
// user3={
//     userName:"Md. Kamal Rahman",
//     id:103
// }
// users.push(user3)

// console.log(users);


// upper code are not custom so now i use custom

let users: object[];

users = [];

type User={userName:string,id:number};

let user1:User
user1={
    userName:"Md. Jillur Rahman",
    id:101
}
users.push(user1)
let user2:User
user2={
    userName:"Md. Abdul Muhit",
    id:102
}
users.push(user2)
let user3:User
user3={
    userName:"Md. Kamal Rahman",
    id:103
}
users.push(user3)

console.log(users);

// more custom type

type RequestType="GET" | "POST"
let getRequest:RequestType
getRequest="GET" // GET ,Post Sara Kisu dewa jabe na