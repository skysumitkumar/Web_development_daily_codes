// // EventTarget->interface->top-level-entity
// //              3 methods->addEventListener() 
// //                         removeEventListener() 
// //                         dispatchEvent()
// // EventTarget->node->element
// // addEventListener:-listen to event,respond to event,hook into event
// // add listener when i clicked on page it print something on console
// document.addEventListener('click',function(){
//     console.log("I clicked on browser");
// })
// let content=document.querySelector('h1');
// // when clicked on window all h1 tag are red
// content.addEventListener('click',function(){
//     content.style.background='red';
// });
// // to see all events
// monitorEvents(document);
// // remove event listener:-remove event listener method require to pass same exact listener function that you pass in addEventListener
// let content1=document.querySelector('h1');
// function redColor(){
//     content1.style.background='red';
// }
// document.addEventListener('click',redColor);
// document.addEventListener('click',redColor);
// // dispatchEvent
// // phases of ans event:-capturing phase 
// //                      AtTarget phase 
// //                      bubbling phase
// // by default event listener execute on bubbling phase
// // to execute event listener in capturing phase we use below
// document.addEventListener('click',redColor,true);//here we have to give true


// const content2=document.querySelector('#index1');
// content2.addEventListener('click',function(event){//we also write other name in place of event that behave same
//     console.log(event);
// })
// //prevent Default
// const content3=document.querySelector('a');
// content3.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("open kar ho rahi h kya")
// })


// // avoid too many events
// let myDiv=document.createElement('div');
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is a para '+i;
//    // here all paragraph have different listeners
//     newElement.addEventListener('click',function(event){
//         console.log("I have clicked on para");
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// // here we have one listener
// let myDiv=document.createElement('div');
// function paraStatus(event){
//     console.log("I have clicked on para");
// }
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is a para '+i;
//     newElement.addEventListener('click',paraStatus);
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// //here listener is on div here we click on anywhere in div something happen we loose functionality of para
// let myDiv=document.createElement('div');
// function paraStatus(event){
//     console.log("I have clicked on para");
// }
// myDiv.addEventListener('click',paraStatus);
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is a para '+i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// // so to do write we use phase
// let myDiv=document.createElement('div');
// function paraStatus(event){
//     console.log('Para '+event.target.textContent);//event target
// }
// myDiv.addEventListener('click',paraStatus);
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent='This is a para '+i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// // when we click on span it print that content but when we click on paragraph it print both data paragraph and span
// let element=document.querySelector('#index2');
// element.addEventListener('click',function(event){
//     console.log("span par click keya h "+event.target.textContent);
// });


// so do it correctly we use nodeName
let element=document.querySelector('#index2');
element.addEventListener('click',function(event){
    if(event.target.nodeName=='SPAN')
    console.log("span par click keya h "+event.target.textContent);
});


