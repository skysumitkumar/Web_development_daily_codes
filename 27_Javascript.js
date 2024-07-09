// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(1.8));
// console.log(Math.max(1,2,3));
// console.log(Math.min(2,34,4,1));
// console.log(Math.abs(-90));


// // String are two types in javascript 
// // primitive 
// // Object
// let lastName="kumar";
// let firstName=new String("Sumit");
// console.log(typeof(lastName));
// console.log(typeof(firstName));
// // when we use (.)dot with primitive string than javascript treat internally it as String object
// console.log(lastName.length);
// console.log(lastName[0]);
// console.log(lastName.includes("ma"));
// console.log(lastName.startsWith("ak"));
// console.log(lastName.endsWith("ar"));
// console.log(lastName.toUpperCase());
// console.log(lastName.toLowerCase());
// // to remove all spaces in string 
// console.log(lastName.trim());
// console.log(lastName.replace("ku","Sumitku"));
// let message="Hello sumit what are you doing";
// // to split word on bases of some condition
// let words=message.split(' ');
// console.log(words);


// // template literal
// let message=`hello
// this is my \nmessage
// how \' are you`;
// console.log(message);
// // dynamically add string
// let a="hello";
// let message1=`${a} i am using
// dynamically`
// console.log(message1);


// // date and time
// let date=new Date();
// console.log(date);
// let date1=new Date('june 20 1998 07:15');
// console.log(date1);
// let date3=new Date(1998,5,20,7);
// console.log(date3);
// date3.setFullYear(1947);
// console.log(date3);
// date3.getTime();
// console.log(date3);


// // Arrays
// // we can add different types of data in it
// let a=[1,2,3,5,4];
// console.log(a);
// console.log(a.length);
// // push a back
// a.push(9);
// // push a start
// a.unshift(0);
// // insert a middle
// // index,delete,insert
// a.splice(2,0,'a','b','c');
// console.log(a);
// // if not found it print -1
// console.log(a.indexOf(3));
// console.log(a.includes(7));
// // number,starting index to search
// console.log(a.indexOf(4,2));
// // to pop from end
// a.pop();
// // to pop from start
// a.shift();
// // to remove from between
// a.splice(2,1);
// console.log(a);
// // Emptying ans array
// let b=[1,2,5,8,7,4,,6,3,9,10];
// b=[];
// console.log(b);
// // when we point some array to this array its address is copied or it point to that array
// let c=[1,2,5,4,6,3,2,1,3,2,5,4];
// let d=c;
// // it cant remove the elements
// c=[];
// console.log(d);
// // so to remove we use  e.length=0;
// let e=[1,2,5,4,6,3,2,1,3,2,5,4];
// let f=e;
// e.length=0;
// console.log(e);
// // we also use splice
// let g=[1,2,5,4,6,3,2,1,3,2,5,4];
// let h=g;
// g.splice(0,g.length);
// console.log(g);
// // to concat to arrays
// let i=[1,2,5];
// let j=[3,6,9,8];
// let k=i.concat(j);
// console.log(k);
// // spread operator
// let o=[...i,...j];
// console.log(o);
// // to slice the array first is inclusive and second is exclusive
// let m=k.slice(2,5);
// console.log(m);
// // it create full copy of the array
// let n=k.slice();
// console.log(n);
// let p=[...k];
// console.log(p);
// // print the array using for of loop
// for(let value of p)
// {
//     console.log(value);
// }
// // to join the array
// let q=[10,5,2,3,2,1,4,9];
// const joined=q.join(',');
// console.log(joined);
// // to split the array
// let r="This is my silting string";
// let s=r.split(' ');
// console.log(s);
// // to sort the elements sort function sort on the bases of string it convert internally these in string
// let t=[8,5,2,3,6,9,8,4,1,2]
// t.sort();
// console.log(t);
// t.reverse();
// console.log(t);
// // to filter the values
// let u=[1,-2,-6,8,6,9];
// let filter=u.filter(function(no){
//     return no>=0;
// })
// console.log(filter);
// let courses=[
//     {no:1,name:"sumit"},
//     {no:2,name:"amit"}
// ];
// console.log(courses);
// // it give -1 because because prev we discuss about the primitive and now we deal with reference so its address is diff
// console.log(courses.indexOf({no:1,name:"sumit"}));
// console.log(courses.includes({no:1,name:"sumit"}));


// // call back function
// // a call back function is a function passed into another function as an argument,which is then invoked inside the outer 
// // function to complete some kind of routine or action.
// let courses=[
//     {no:1,name:"sumit"},
//     {no:2,name:"amit"}
// ];
// // it return object
// let ans=courses.find(function(course){
//     return course.name==="sumit";//remember to use ===
// })
// // if not found it show undefined
// console.log(ans);
// // to decrease this function we use arrow function
// // firstly we remove function and add => before parenthesis then if one parameter then we remove brackets if one return statement then we remove return
// let ans1=courses.find(course=>course.name==="amit");
// console.log(ans1);
// //print the array using forEach loop
// let t=[1,2,5,8,9,6,3,1,4,,7];
// t.forEach(function(no){
//     console.log(no);
// });
// // using arrow function
// t.forEach(no=>console.log(no));


// //Mapping Arrays
// let a=[7,8,9,10];
// let items=a.map(function(value){
//     return 'student_no'+value;
// })
// console.log(items);
// // mapping with object
// let b=[1,2,-6,-9];
// let filtered=b.filter(value=>value>=0);
// let c=filtered.map(function(num){
//     return {value:num};
// })
// console.log(c);
// // chaining
// let d=[1,2,-6,-9];
// let e=d.filter(value=>value<=0).map(num=>({value:num}));
// console.log(e);


// reduce Method:-to reduce the array
let arr=[1,2,5,8,8,5,2,6,3];
let total=0;
//0 is initialized value of accumulator
// if we not write 0 there so accumulator is by default initialized with first value and currentValue is start with second value
let totalSum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
let totalSum1=arr.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log("total sum is ",totalSum);
console.log("total sum1 is ",totalSum1);
