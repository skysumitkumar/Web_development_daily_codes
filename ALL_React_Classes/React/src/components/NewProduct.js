/* ----------------------   39_React_Basics    ------------------------------------- */

// import './NewProduct.css';
// import ProductForm from './ProductForm';
// function NewProduct(){
//     return(<div className="new-product">
//         <ProductForm/>
//     </div>)
// }

// export default NewProduct;

// communicate child with parent
import './NewProduct.css';
import ProductForm from './ProductForm';
function NewProduct(props){
    // here we make function
    function saveProduct(product){
        console.log("i am inside new Product");
        console.log(product);
        // calling parent function
        props.printProduct(product);
    }
    return(<div className="new-product">
    {/* here we pass that function */}
        <ProductForm onSaveProduct={saveProduct}/>
    </div>)
}

export default NewProduct;

/* ----------------------   40_React_Basics    ------------------------------------- */