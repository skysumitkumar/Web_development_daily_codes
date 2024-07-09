// // function
// function run(){
//     console.log("function is start");
// }
// run();


// // we also do this
// // Hoisting:-it is the process of moving function declaration to the top of the file this is done automatically by js engine
// run();
// function run(){
//     console.log("function is start");
// }


// // Named function assignment
// let stand=function walk(){
//     console.log("walking");
// }
// stand();
// // when we use walk() this don't work


// // it not work in case of function assignment
// stand();
// let stand=function walk(){
//     console.log("Walking");
// }


// // Anonymous function assignment
// let stand=function(){
//     console.log("walking");
// }
// stand();
// // but it cant work when we write stand at the above of function


// // it cant give error because js is dynamic language
// let x=1;
// x="a";
// console.log(x);


// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));//it give 3


// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1));//it give NaN


// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2,5));//it give 3


// function sum(a,b){
//     return a+b;
// }
// console.log(sum());//it give NaN


// function sum(a,b){
//     console.log(arguments)//argument is not a array it is object
//     return a+b;
// }
// console.log(sum(1,2,5,8));


// // access all values of arguments
// let total=0;
// function sum(a,b){
//     for(let value of arguments)
//     {
//         total+=value;
//     }
//     console.log(total)
//     return a+b;
// }
// console.log(sum(1,2,5,8));


// // access all values of arguments
// let total=0;
// function sum(){
//     for(let value of arguments)
//     {
//         total+=value;
//     }
//     console.log(total);
//     return a+b;
// }
// console.log(sum(1,2,5,8));


// //Rest Operator (...):-jitne input doge vo array me store ho jaaege
// function sum(...args)
// {
//     console.log(args); //args is a array
// }
// sum(1,2,3,34,4,5,5,5,5);


// //Rest Operator (...):-jitne input doge vo array me store ho jaaege
// function sum(a,b,...args)
// {
//     console.log(args); //args is a array
// }
// sum(1,2,3,34,4,5,5,5,5);//it give 3,34,4,5,5,5,5 


// //Rest Operator (...):-jitne input doge vo array me store ho jaaege
// function sum(...args,a,b)
// {
//     console.log(args); //args is a array
// }
// sum(1,2,3,34,4,5,5,5,5);//it give error 


// // Default Parameters
// function interest(p=7,r,y){
//     return (p*r*y)/100;
// }
// console.log(interest(1,2));//it give error


// // Default Parameters
// function interest(p,r=8,y){
//     return (p*r*y)/100;
// }
// console.log(interest(1,2));//it give error


// // Default Parameters
// function interest(p,r,y=9){
//     return (p*r*y)/100;
// }
// console.log(interest(1,2));//it give 0.18



// // if we make a default parameter so we have to make all right side variable as a default parameter
// function interest(p,r=1,y=7){
//     return (p*r*y)/100;
// }
// console.log(interest(1,2));//it give 0.14
// // we have some hack of it is 
// function interest1(p,r=1,y){
//     return (p*r*y)/100;
// }
// console.log(interest1(1,undefined,2));//it give 0.02



// // read only function
// let person={
//     firstName:"sumit",
//     lastName:"kumar"
// };
// function fullName(){
//     return `${person.firstName}-${person.lastName}`
// }
// console.log(fullName());



// // getter->access properties
// // setter->change or mutate properties
// let person={
//     firstName:"sumit",
//     lastName:"kumar",
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },
//     // setter only take one parameter
//     set fullName(value){
//         let parts=value.split(' ');
//         this.firstName=parts[0];
//         this.lastName=parts[1];
//     }
// };
// console.log(person.fullName);
// // it give error
// //console.log(person.fullName("amit"));
// // so to do it correctly 
// person.fullName="Rahul kumar";
// console.log(person.fullName);


// try and catch 
let person={
    firstName:"sumit",
    lastName:"kumar",
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    // setter only take one parameter
    set fullName(value){
        if(typeof value!=String){
            throw new Error("Yor have not sent a string")
        }
        let parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};
// try{
//     person.fullName=1;
// }
// catch(e){
//     alert("You have sent a no in place of string");
// }
// console.log(person.fullName);
try{
    person.fullName=1;
}
catch(e){
    alert(e);
}
console.log(person.fullName);



























