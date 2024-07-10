// Window:-this is a global object,this is created by browser,it represent a browser window
//         Dom,Bom,JS core lies in window
// DOM:-Document object model
//      convert complete html code into js obj then it is called document

console.log(document);
console.log(document.body);
// DOM is tree like structure
//  character->tags->token->nodes->DOM
// BOM:-it allow js to talk to browser about matter other than content of page


// to fetch element by whose id
document.getElementById("content");
// to fetch element by className this array like object but that are not an array
document.getElementsByClassName("content1");
// to fetch element by tag name
document.getElementsByTagName("p");
// to fetch element by $0 after selected perticular tag
// let para=$0;
// console.log(para);
// to fetch element by querySelector if we have multiple element than it give first element
// by id
document.querySelector("#content2");
// by class
document.querySelector(".content2");
// by tag
document.querySelector("p");
// to fetch element by querySelectorAll 
// by id
document.querySelectorAll("#content3");
// by class
document.querySelectorAll(".content3");
// by tag
document.querySelectorAll("p");


// update existing content
// innerHtml:-get:-get an element/all of its decedent
//                 set:-set ans element HTML content
let take=document.querySelector(".content4");
console.log(take.innerHTML);
// to empty all
take.innerHTML=' ';
console.log(take.innerHTML);
// outerHtml:-
let add=document.querySelector(".content4");
add.outerHTML="<h2>This is a h2 element</h2>";
// textContent:-to get and set the textual content
let change=document.querySelector(".content5");
change.textContent;
// innerText
change.innerText;
// difference between innerText and textContent:-
// if we give tag between some tag we we use innerText to that it render to that tag and bold it ,if display hidden so that not show here
//                                           textContent to that it can't render it show those tag as text ,if display hidden that also show here



// To add new element/content
let c=document.querySelector(".content6");
let newPara=document.createElement('p');
c.appendChild(newPara);//it append at the end
// to add data on tag
let newPara1=document.createElement('p');
let textPara=document.createTextNode("i am inserting data on p tag");
newPara1.appendChild(textPara);
c.appendChild(newPara1);
// add data using textContent
let c1=document.querySelector(".content6");
let newPara2=document.createElement('p');
newPara2.textContent="i am inserting data on p using textContent";
c1.appendChild(myPara2);
// add tag to specific position
// location:-beforeBegin,afterBegin,beforeEnd,afterEnd
// HTML text/content to be inserted
let d=document.querySelector(".content7");
let newPara3=document.createElement('p');
newPara3.textContent("i am inserting p using textContent");
d.insertAdjacentElement('beforebegin',newPara3);


// remove child
// its drawback is we have to know the parent firstly
let e=document.querySelector(".content8");
let f=document.querySelector(".content9");
e.removeChildNode(f);
// so the solution is
f.parentNode.removeChild(f);


// style html using js
// .style
// .cssText
// .setAttribute
// .className
// .classList
// .style
let g=document.querySelector(".content10");
g.style.color="red";
// .cssText
let h=document.querySelector(".content11");
h.style.cssText="color:green;background-color:yellow:font-size:4em;";
// .setAttribute
let i=document.querySelector(".content12");
i.setAttribute("'style","color:white;");
i.setAttribute("id","content12-1");//here we violate separation of concern
// to solve separation of concern
// .className
let j=document.querySelector(".content13");
j.className; //it give string of classes
// to get all className array
let k=j.className.trim().split(' ');
// .classList
let l=document.querySelector(".content14");
l.classList;//it give array of classes
// we have some methods in it:-add(),remove(),toggle(),contain()












