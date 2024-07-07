// // Object
// const rectangle={
//     length:1,
//     breath:2
// }
// // print object
// console.log(rectangle);
// //print length
// console.log(rectangle.length);


// // to find properties is present or not
// let Rectangle={
//     length:2,
//     breath:3,
// };
// if('length'in Rectangle)
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }


// // give behavior to object
// // function in object is called as method
// const rectangle={
//     length:1,
//     breath:33,
//     draw: function(){
//         console.log("here i add behavior");
//     }
// };
// // to print draw method
// console.log(rectangle.draw);
// // // call draw method
// rectangle.draw();


// // function that create object
// // Factory Function
// // Constructor Function
// // Factory Function
// function createRectangle(){
//     let rectangle={
//         length:1,
//         breath:2,
//         draw: function(){
//             console.log("A new object is created");
//         }
//     };
//     return rectangle;
// }
// // or we can write this as
// function createRectangle(){
//     return rectangle={
//         length:1,
//         breath:2,
//         draw: function(){
//             console.log("A new object is created");
//         }
//     };
// }
// // create object
// let rectangleObj1=createRectangle();
// // print object
// console.log(rectangleObj1);


// // create object with parameters
// function createRectangle(length,breath){
//     return rectangle={
//         length:length,
//         breath:breath,
//         draw: function(){
//             console.log("A new object is created");
//         }
//     };
// }
// // or we can write this as 
// function createRectangle(length,breath){
//     return rectangle={
//         length,
//         breath,
//         draw: function(){
//             console.log("A new object is created");
//         }
//     };
// }
// // create object
// let rectangleObj2=createRectangle(2,8);
// // print object
// console.log(rectangleObj2);

// // Constructor function
// // constructor function->Pascal Notation ->first letter of every word is Capital->NumberOfWords
// function Rectangle(length,breath){
//     this.length=length;
//     this.breath=breath;
//     this.draw=function(){
//         console.log("A new object is created by constructor function");
//     }
// }
// // object creation using constructor function
// let rectangleObj=new Rectangle(5,9);
// console.log(rectangleObj);
// // add properties in object
// rectangleObj.color="white";
// console.log(rectangleObj);
// // to delete property of an object
// delete rectangleObj.color;
// console.log(rectangleObj);
// // print the rectangleObj constructor
// console.log(rectangleObj.constructor);
// // print the rectangle constructor it give default inbuilt constructor
// console.log(Rectangle.constructor);


// // make internally constructor Function that we print previously console.log(Rectangle.constructor);
// let Rectangle1=new Function('length','breath',
//     `this.length=length;
//     this.breath=breath;
//     this.draw=function(){
//     console.log("Here i create a object with internal constructor");
//     }`
// );
// let rectangleObj=new Rectangle1(7,9);
// console.log(rectangleObj);


// //Note:-primitive are copied by their value
// //      References are copied by their address/references
// // in primitive type a new copy is formed
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);
// // here we deal with object and in objects address is passed
// let c={value:10};
// let d=c;
// c.value++;
// console.log(c.value);
// console.log(d.value);


// let a=10;
// function increment(a){
//     a++;
// }
// increment(a);
// console.log(a);
// let c={value:10};
// function increment1(a){
//     c.value++;
// }
// increment1(c);
// console.log(c.value);


// //for in loop:- to iterate on object
// let Rectangle={
//     length:2,
//     breath:3,
// };
// for(let key in Rectangle)
// {
//     // to print the keys and values
//     console.log(key,Rectangle[key]);
// }
// // for of loop:-we can do in only iterables like array and maps
// // we have on hack to iterate on objects with the help of for of loop
// for(let key of Object.keys(Rectangle))
// {
//     console.log(key);
// }
// for(let key of Object.entries(Rectangle))
// {
//     console.log(key);
// }


// Object Cloning
// Iteration,Assign,Spread
// Iteration
let src={
    a:10,
    b:20,
    c:30,
};
let dest={};
for(let key in src)
{
    dest[key]=src[key];
}
console.log(dest);
src.a++;
console.log(dest);
// Assign
let dest1=Object.assign({},src);
console.log(dest1);
src.b++;
console.log(dest1);
// copy multiple src
let src1={value:25};
let dest2=Object.assign({},src,src1);
console.log(dest2);
src.b++;
console.log(dest2);
// Spread
let dest3={...src};
console.log(dest3);
src.c++;
console.log(dest3);












// Garbage Collection
// we have no control over garbage collector it run in background it free unused variable

