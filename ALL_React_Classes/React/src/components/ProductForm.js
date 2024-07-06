/* ----------------------   39_React_Basics    ------------------------------------- */

// import './ProductForm.css';
// function ProductForm(){
//     return(<form>
//     <div className="new-product-controls">
//     <div className="new-product-control">
//             <label>Title</label>
//             <input type="text" ></input>
//         </div>
//         <div className="new-product-control">
//             <label>Date</label>
//             <input type="date" min='2023-01-01' max='2023-12-12'></input>
//         </div>
//         <div className="new-product-button">
//             <button type="submit" >ProductButton</button>
//         </div>
//     </div>
//     </form>)
// }

// export default ProductForm;

// // to find what is in the current input field
// import './ProductForm.css';
// function ProductForm(){

//     // this function print current data on input field
//     function titleChangeHandler(event){
//         console.log(event.target.value)
//     }
//     return(<form>
//     <div className="new-product-controls">
//     <div className="new-product-control">
//             <label>Title</label>
//             <input type="text" onChange={titleChangeHandler}></input>
//         </div>
//         <div className="new-product-control">
//             <label>Date</label>
//             <input type="date" min='2023-01-01' max='2023-12-12'></input>
//         </div>
//         <div className="new-product-button">
//             <button type="submit" >ProductButton</button>
//         </div>
//     </div>
//     </form>)
// }

// export default ProductForm;

// // to find what is in the current input field in multiple input field
// import './ProductForm.css';
// import { useState } from 'react';
// function ProductForm(){

//     // here we use state
//     const[title,setTitle]=useState('');
//     const[date,setDate]=useState('');

//     // this function print current data on input field
//     function titleChangeHandler(event){
//         setTitle(event.target.value);
//         console.log(event.target.value)
//     }
//     function dateChangeHandler(event){
//         setDate(event.target.value);
//         console.log(event.target.value)
//     }
//     return(<form>
//     <div className="new-product-controls">
//     <div className="new-product-control">
//             <label>Title</label>
//             <input type="text" onChange={titleChangeHandler}></input>
//         </div>
//         <div className="new-product-control">
//             <label>Date</label>
//             <input type="date" onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
//         </div>
//         <div className="new-product-button">
//             <button type="submit" >ProductButton</button>
//         </div>
//     </div>
//     </form>)
// }

// export default ProductForm;

// // to handle single handedly
// import './ProductForm.css';
// import { useState } from 'react';
// function ProductForm(){

//     // here we use state
//     const[fullProductInput,setfullProductInput]=useState({
//         title:'',
//         date:''
//     });
//     function titleChangeHandler(event,prevState){
//         let obj= {...prevState,title:event.target.value};
//         console.log(obj);
//         return obj;
//     }
//     function dateChangeHandler(event,prevState){
//         let obj= {...prevState,title:event.target.value};
//         console.log(obj);
//         return obj;
//     }
//     return(<form>
//     <div className="new-product-controls">
//     <div className="new-product-control">
//             <label>Title</label>
//             <input type="text" onChange={titleChangeHandler}></input>
//         </div>
//         <div className="new-product-control">
//             <label>Date</label>
//             <input type="date" onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
//         </div>
//         <div className="new-product-button">
//             <button type="submit" >ProductButton</button>
//         </div>
//     </div>
//     </form>)
// }

// export default ProductForm;

// // to prevent default behavior of button when we click on button console data not remove and when we click on button an object is printed that take all input fields vales
// import './ProductForm.css';
// import { useState } from 'react';
// function ProductForm(){

//     // here we use state
//     const[newTitle,setTitle]=useState('');
//     const[newDate,setDate]=useState('');
//     function titleChangeHandler(event){
//         setTitle(event.target.value);
//     }
//     function dateChangeHandler(event){
//         setDate(event.target.value);
//     }
//     function submitHandler(event){
//         // here we use this prevent default behavior
//         event.preventDefault();
//         // here we make our object that print values
//         const productData={
//             title:newTitle,
//             date:newDate
//         };
//         console.log(productData);
//     }
//     return(<form onSubmit={submitHandler}>
//     <div className="new-product-controls">
//     <div className="new-product-control">
//             <label>Title</label>
//             <input type="text" onChange={titleChangeHandler}></input>
//         </div>
//         <div className="new-product-control">
//             <label>Date</label>
//             <input type="date" onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
//         </div>
//         <div className="new-product-button">
//             <button type="submit" >ProductButton</button>
//         </div>
//     </div>
//     </form>)
// }

// export default ProductForm;

// // to prevent default behavior of button when we click on button console data not remove and when we click on 
// //button an object is printed that take all input fields values and empty the input field
// import './ProductForm.css';
// import { useState } from 'react';
// function ProductForm(){

//     const[newTitle,setTitle]=useState('');
//     const[newDate,setDate]=useState('');
//     function titleChangeHandler(event){
//         setTitle(event.target.value);
//     }
//     function dateChangeHandler(event){
//         setDate(event.target.value);
//     }
//     function submitHandler(event){
//         event.preventDefault();
//         const productData={
//             title:newTitle,
//             date:newDate
//         };
//         console.log(productData);
//         setTitle('');
//         setDate('');
//     }
//     return(<form onSubmit={submitHandler}>
//     <div className="new-product-controls">
//     <div className="new-product-control">
//             <label>Title</label>
//             {/* here we have to use value={newTitle} to link with UI*/}
//             <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
//         </div>
//         <div className="new-product-control">
//             <label>Date</label>
//             <input type="date" value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
//         </div>
//         <div className="new-product-button">
//             <button type="submit" >ProductButton</button>
//         </div>
//     </div>
//     </form>)
// }

// export default ProductForm;


//to prevent default behavior of button when we click on button console data not remove and when we click on 
//button an object is printed that take all input fields values and empty the input field
import './ProductForm.css';
import { useState } from 'react';
function ProductForm(props){

    const[newTitle,setTitle]=useState('');
    const[newDate,setDate]=useState('');
    function titleChangeHandler(event){
        setTitle(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const productData={
            title:newTitle,
            date:newDate
        };
        // here we lastly call props
        props.onSaveProduct(productData);
        setTitle('');
        setDate('');
    }
    return(<form onSubmit={submitHandler}>
    <div className="new-product-controls">
    <div className="new-product-control">
            <label>Title</label>
            {/* here we have to use value={newTitle} to link with UI*/}
            <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-product-control">
            <label>Date</label>
            <input type="date" value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
        </div>
        <div className="new-product-button">
            <button type="submit" >ProductButton</button>
        </div>
    </div>
    </form>)
}

export default ProductForm;

/* ----------------------   40_React_Basics    ------------------------------------- */