import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from "react";

function App() {

  let fooditem = [/* 'Dal', 'Green Vegetables', 'Salad', 'Roti', 'Milk', 'Ghee', 'Chicken' */];

  // if-else
  /* if(fooditem.length === 0)
  {
    return <h3>I am Still Hungry</h3>;
  } */

    // ternary
 /*  let emptyMessage = fooditem.length === 0 ? <h3>I am Still Hungry</h3> : null; */

  return ( 
    <>
      <h1>Healthy Foods</h1>
      {/* {emptyMessage} */}
      {/* logical */}
      {fooditem.length === 0 && <h3>I am Still Hungry</h3>}
      <ul className="list-group">
        {fooditem.map((item) => ( 
        <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
