// create a component
// link css
import './38_React_Basic.css';
// function Item(){
//     const day=20;
//     return (
//         <div>
//             <p className="nirma">Nirma</p>
//             <span>{day}</span>
//         </div>
// );
// }


// // here we use props
// function Item(props){
//     const name=props.name;
//     const day=props.day;
//     const sex=props.sex;
//     return (
//         <div>
//         <p className="nirma">{name}</p>
//             <span>{day}</span><br></br>
//             <span>{sex}</span>
//         </div>
// );
// }

// // use response
// function Item(props){
//     const name=props.name;
//     const date=props.day;
//     const month=props.month;
//     const year=props.year;
//     return (
//         <div>
//         <p className="nirma">{name}</p>
//             <span>{date}</span><br></br>
//             <span>{month}</span><br></br>
//             <span>{year}</span>
//         </div>
// );
// }

// use response
function Item(props){
    const name=props.name;
    const date=props.day;
    const month=props.month;
    const year=props.year;
    return (
        <div>
        <p className="nirma">{name}</p>
        {props.children}
            <span>{date}</span><br></br>
            <span>{month}</span><br></br>
            <span>{year}</span>
        </div>
);
}
// export component to use in App.jsx file
export default Item;