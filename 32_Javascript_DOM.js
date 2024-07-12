// //synchronous code
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');


// // asynchronous code
// setTimeout(function(){
//     console.log('third');
// },5000)
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

// Async code feature:-clean and concise,better error handling,easily debugging
// API:-application programming interface

// // Promise
// // koi bhi chiz parallel execute karna chate ho to javascript me to promise ka use karte h
// let meraPromise=new Promise(function(resolve,reject){
//     console.log("i am inside promise");
//     resolve(1998);
// })
// console.log('pehla');

// //successful promise
// let meraPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("i am inside Promise");
//     },5000);
//     resolve(2233);
// });
// console.log('Pehla');


// // error promise
// let meraPromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("i am inside Promise");
//     },5000);
//     reject(new Error('error is comming here'));
// });
// console.log('Pehla');


// //parallel execution of 2 codes
// let meraPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("i am inside Promise");
//     },5000);
// });
// console.log('Pehla');
// let meraPromise2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("i am inside Promise");
//     },5000);
// });
// console.log('Pehla');



// let meraPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("i am inside Promise");
//     },5000);
//     resolve(2233);
// });
// meraPromise1.then(value=>console.log(value));


// let meraPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("i am inside Promise");
//     },5000);
//     reject(new Error("here we go error"));
// });
// meraPromise1.then(value=>console.log(value));
// meraPromise1.catch(error=>console.log("Received an error"));


// let meraPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("i am inside Promise");
//     },5000);
//     resolve(15451);
//     //reject(new Error("here we go error"));
// });
// meraPromise1.then(value=>console.log(value),error=>console.log("Received an error"));


// let meraPromise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("setTimout1 started");
//     },2000);
//     resolve(true);
// });
// let output=meraPromise1.then(()=>{
//     let meraPromise2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("setTimout2 started");
//         },3000);
//         resolve("meraPromise2 is resolved");
//     })
//     return meraPromise2;
// });
// output.then((value)=>console.log(value));


// // async code
// async function abcd(){
//     return 7;
// }
// console.log(abcd());

// // use of await
// async function utility(){
//     let delhiMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Delhi me bhot garmi hai");
//         },1000);
//     });
//     let hydMausam=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hyderabad me to maze aa rahe h");
//         },5000);
//     });
//     let dM=await delhiMausam;
//     let hM=await hydMausam;
//     return [dM,hM];
// }
// console.log(utility());

// API
// jsonconverter:-jsonformatter.curiousconcept.com
// json:-javascript object notation
// let content=fetch('https://jsonplaceholder.typicode.com/posts/1');
// console.log(content);

// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output=await content.json();
//     console.log(output);
// }
// utility();

// //fetch('key',options)
// // json post method
// async function helper(){
//     let options={
//         method:'POST',
//         body:JSON.stringify({
//             title:'foo',
//             body:'bar',
//             userId:1,
//         }),
//         headers:{
//             'Content-type':'application/json;charset=UTF-8',
//         },
//     };
//     let content=await fetch('https://jsonplaceholder.typicode.com/posts',options);
//     let response=content.json();
//     return response;
// }
// async function utility(){
//     let ans=await helper();
//     console.log(ans);
// }
// utility();


// // closers:-is top level entity that contain function logic and function used parameter that data also contain by closer
// // closer take reference not a copy
// function init(){
//     var name="Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }
// init();


function init(){
    let name="Mozilla";//it destroy after brackets but closer take it
    function displayName(){
        console.log(name);
    }
    return displayName();
}
let func1=init();
func1;

//classes and export modules in JS







