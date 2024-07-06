/* ----------------------   38_React_Basics    ------------------------------------- */

// //import files to use them
// import "./App.css";
// import Item from './components/React_Basic';
// // function App() {
// //   return (
// //     <div>
// //       <Item></Item>
// //       <div className="App">Hello Jee</div>
// //     </div>
// //   );
// // }


// // // use props
// // function App() {
// //   return (
// //     <div>
// //       <Item name="sumit" day="20" sex="M"></Item>
// //       <Item name="uttam" day="30" sex="M"></Item>
// //       <Item name="lokesh" day="50" sex="M"></Item>
// //       <div className="App">Hello Jee</div>
// //     </div>
// //   );
// // }

// // // use responce
// // function App() {
// //   const response= [
// //     {
// //     itemName:"sumit",
// //     itemDate:"30",
// //     itemMonth:"aug",
// //     itemYear:"1999"
// //   },
// //   {
// //     itemName:"uttam",
// //     itemDate:"20",
// //     itemMonth:"june",
// //     itemYear:"1998"
// //   },
// //   {
// //     itemName:"amit",
// //     itemDate:"10",
// //     itemMonth:"april",
// //     itemYear:"1998"
// //   }
// // ];
// //   return (
// //     <div>
// //       <Item name={response[0].itemName} day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></Item>
// //       <Item name={response[1].itemName} day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Item>
// //       <Item name={response[2].itemName} day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Item>
// //       <div className="App">Hello Jee</div>
// //     </div>
// //   );
// // }

// // use responce
// function App() {
//   const response= [
//     {
//     itemName:"sumit",
//     itemDate:"30",
//     itemMonth:"aug",
//     itemYear:"1999"
//   },
//   {
//     itemName:"uttam",
//     itemDate:"20",
//     itemMonth:"june",
//     itemYear:"1998"
//   },
//   {
//     itemName:"amit",
//     itemDate:"10",
//     itemMonth:"april",
//     itemYear:"1998"
//   }
// ];
//   return (
//     <div>
//       <Item name={response[0].itemName} day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}>
//         Hello we are writing here<br></br>
//       </Item>
//       <Item name={response[1].itemName} day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></Item>
//       <Item name={response[2].itemName} day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></Item>
//       <div className="App">Hello Jee</div>
//     </div>
//   );
// }
// // we have to export it to use in index.js
// export default App;

/* ----------------------   39_React_Basics    ------------------------------------- */

// //import files to use them
// import "./App.css";
// import NewProduct from "./components/NewProduct";
// import Item from './components/React_Basic';
// function App() {
//   return (
//     <div>
//     <NewProduct/>
//     <Item name="sumit"></Item>
//     <div className="App">Hello Jee</div>
//     </div>
//   );
// }
// // we have to export it to use in index.js
// export default App;

// parent can communicate child with props but how child can communicate with parent
// so to do this we make a function on parent and pass it to the child then child call that function we 
//parameter object then parent access that function and these communicate
// make sure when give name to prop that handel event so it started from on
//import files to use them
import "./App.css";
import NewProduct from "./components/NewProduct";
import Item from './components/React_Basic';
function App() {
  // here we make that function
  function printProductData(data){
    console.log("i am inside App.js")
    console.log(data)
  }
  return (
    <div>
    {/* here we pass that function with props*/}
    <NewProduct printProduct={printProductData}/>
    <Item name="sumit"></Item>
    <div className="App">Hello Jee</div>
    </div>
  );
}
// we have to export it to use in index.js
export default App;

/* ----------------------   40_React_Basics    ------------------------------------- */