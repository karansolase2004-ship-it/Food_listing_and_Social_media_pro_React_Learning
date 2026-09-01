import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from "react";

function App() {

  let fooditem = ['Dal', 'Green Vegetables', 'Salad', 'Roti', 'Milk', 'Ghee', 'Chicken'];

  return ( 
    <>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {fooditem.map((item) => ( 
        <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
