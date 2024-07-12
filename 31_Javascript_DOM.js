// // standard way to measure how long your code taken to run:-performance.now();
// // adding 100 paragraph
// const t1=performance.now();
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para '+ i;
//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("it took "+(t2-t1)+"ms");

// // optimizing a bit
// const t3=performance.now();
// let myDiv=document.createElement('div');
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para '+ i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log("it took "+(t4-t3)+"ms");

// // Reflow:-when new is added some mathematically calculation are their(size,dimension....)
// //         it is the process of calculating the dimension and position element this is a computationally intensive task
// // Repaint:- new screen layout ko diplay k upar pixel by pixel show karna
// //           Repaint is drawing pixels to the screen this is fast then reflow
// // good practice:- minimize reflow and repaint
// // document fragment:-light weight document object ispar paragraph ya div add karne par koi repaint and reflow nahi hota
// const t5=performance.now();
// let fragment=document.createDocumentFragment();
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is Para '+i;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);
// const t6=performance.now();
// console.log("it took "+(t6-t5)+"ms");



// // javascript is single-threaded language:-processing of one command at a time
// function addPara(){
//     let para=document.createElement('p');
//     para.textContent='Js is Single';
//     document.body.appendChild(para);
// }
// function appendNewMessage(){
//     let para=document.createElement('p');
//     para.textContent='Kya haal Chaal';
//     document.body.appendChild(para);
// }
// addPara();
// appendNewMessage();


// // call stack
// // js engine keeps a call stack of the function that are running when function is invoked it is added to the list when all of the code inside a function has been run than the function is removed from the call stack
// // Event loop
// // synchronous:-occurring at the same time
// // non-synchronous:-EventListener,it depend upon the js event loop,handling by browser
// //                  its handling done by the browser when this async code it ready to execute it is moved to the queue until call stack it empty
// // event loop
// // philip robert:-https://www.youtube.com/watch?v=8aGhZQkoFbQ
// // tool:-http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// // all event listener call go firstly to the queue when any event happen firstly it check the stack is it empty or not if it is empty so it call that event otherwise wait to empty the stack
// console.log("HI!");
// setTimeout(function timeout(){
//     console.log("click the button!");
// },500000);
// console.log("Welcome to loupe ");


// setTimeout Method
// it print after 5 second
setTimeout(() => {console.log("hello Everyone")
    
}, 5000);









