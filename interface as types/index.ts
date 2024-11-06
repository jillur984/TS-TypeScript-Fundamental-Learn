// let users:{
//     id:number,
//     name:string,
//     age:number
// }[]=[] // that means ei 3 type sara onno kisu ei array of object a dukanu jabe na

// let user1:{
//     id:number,
//     name:string,
//     age:number
// } ={
//     id:1,
//     name:"Anisul Islam Sir",
//     age:32
// }

// let user2:{
//     id:number,
//     name:string,
//     age:number
// } ={
//     id:1,
//     name:"Abul Kalam Sir",
//     age:50
// }

// users.push(user1)
// users.push(user2)

// const printUserInfo=(user:{id:number;name:string;age:number})=>{
//    console.log(`User id= ${user.id},name=${user.name},age=${user.age}`) 
// } 

// users.forEach(user=>printUserInfo(user))

// now work with Inteface for smooth write code

interface iUser{
    id:number,
    name:string,
    age:number
}

let users:iUser []=[] // that means ei 3 type sara onno kisu ei array of object a dukanu jabe na

let user1:iUser ={
    id:1,
    name:"Anisul Islam Sir",
    age:32
}

let user2:iUser={
    id:1,
    name:"Abul Kalam Sir",
    age:50
}

users.push(user1)
users.push(user2)

const printUserInfo=(user:iUser)=>{
   console.log(`User id= ${user.id},name=${user.name},age=${user.age}`) 
} 
users.forEach(user=>printUserInfo(user))

// which item are many that time i assign a template as like variable and use all over the application