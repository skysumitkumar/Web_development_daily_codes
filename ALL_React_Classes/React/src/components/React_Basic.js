/* ----------------------   38_React_Basics    ------------------------------------- */

// // create a component
// // link css
// import './React_Basic.css';
// // function Item(){
// //     const day=20;
// //     return (
// //         <div>
// //             <p className="nirma">Nirma</p>
// //             <span>{day}</span>
// //         </div>
// // );
// // }


// // // here we use props
// // function Item(props){
// //     const name=props.name;
// //     const day=props.day;
// //     const sex=props.sex;
// //     return (
// //         <div>
// //         <p className="nirma">{name}</p>
// //             <span>{day}</span><br></br>
// //             <span>{sex}</span>
// //         </div>
// // );
// // }

// // // use response
// // function Item(props){
// //     const name=props.name;
// //     const date=props.day;
// //     const month=props.month;
// //     const year=props.year;
// //     return (
// //         <div>
// //         <p className="nirma">{name}</p>
// //             <span>{date}</span><br></br>
// //             <span>{month}</span><br></br>
// //             <span>{year}</span>
// //         </div>
// // );
// // }

// // use response
// function Item(props){
//     const name=props.name;
//     const date=props.day;
//     const month=props.month;
//     const year=props.year;
//     return (
//         <div>
//         <p className="nirma">{name}</p>
//         {props.children}
//             <span>{date}</span><br></br>
//             <span>{month}</span><br></br>
//             <span>{year}</span>
//         </div>
// );
// }
// // export component to use in App.jsx file
// export default Item;

/* ----------------------   39_React_Basics    ------------------------------------- */

// import React from 'react';
// import './React_Basic.css';
// function Item(){
//     // this is clickHandler function that perform task when we click on button
//     function clickHandler(){
//         console.log("i clicked on button");
//     }
//     return (
//         <div>
//             <p>hello here i am make a button</p>
//             {/* <button className="button">click on this</button> */}
//             {/* now i want when i click on button something is print on the console */}
//             <button onClick={clickHandler} className="button">This is a button</button>
//         </div>
// );
// }
// // export component to use in App.jsx file
// export default Item;

// // now i want when i click on button some data change on the screen but using this method it wont work we  have use useState
// import React from 'react';
// import './React_Basic.css';
// function Item(props){
//     let name=props.name;
//     // this is clickHandler function that perform task when we click on button
//     function clickHandler(){
//         name="amit";
//         console.log("i clicked on button");
//     }
//     return (
//         <div>
//             <p>hello here i am make a button</p>
//             <span >{name}</span><br></br>
//             {/* <button className="button">click on this</button> */}
//             {/* now i want when i click on button something is print on the console */}
//             {/* when i write clickHandler() than it behave like a function and when page is load it called without click on button */}
//             <button onClick={clickHandler} className="button">This is a button</button>
//         </div>
// );
// }
// // export component to use in App.jsx file
// export default Item;

// // now i want when i click on button some data change on the screen we have to use useState here
// import React,{useState} from 'react';
// import './React_Basic.css';
// function Item(props){
//     // value of the variable, the function for updating the value,initialize value,
//     // useState hook  always returns the array first the value of the variable and second the function that update the variable
//     // if you have data that might change and where changes the data will reflect on UI so have to use state
//     // state change on per component instance bases
//     const[name,setTitle]=useState(props.name);
//     function clickHandler(){
//         // here we set the function
//         setTitle("amit");
//         console.log("i clicked on button");
//     }
//     return (
//         <div>
//             <p>hello here i am make a button</p>
//             <span >{name}</span><br></br>
//             <button onClick={clickHandler} className="button">This is a button</button>
//         </div>
// );
// }
// // export component to use in App.jsx file
// export default Item;

// now i make a new product 
import React,{useState} from 'react';
import './React_Basic.css';
function Item(props){
    // value of the variable, the function for updating the value,initialize value,
    // useState hook  always returns the array first the value of the variable and second the function that update the variable
    // if you have data that might change and where changes the data will reflect on UI so have to use state
    // state change on per component instance bases
    const[name,setTitle]=useState(props.name);
    function clickHandler(){
        // here we set the function
        setTitle("amit");
        console.log("i clicked on button");
    }
    return (
        <div>
            <p>hello here i am make a button</p>
            <span >{name}</span><br></br>
            <button onClick={clickHandler} className="button">This is a button</button>
        </div>
);
}

// export component to use in App.jsx file
export default Item;

/* ----------------------   40_React_Basics    ------------------------------------- */