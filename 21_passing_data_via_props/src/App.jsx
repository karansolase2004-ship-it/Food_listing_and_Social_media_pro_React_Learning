import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/fooditems';
import ErrorMessage from './components/ErrorMessage';
import React from "react";

function App() {

   let fooditem = [/* 'Dal', 'Green Vegetables', 'Salad', 'Roti', 'Milk', 'Ghee', 'Chicken' */];

  return ( 
    <>
      <h1>Healthy Foods</h1>
      {/* This is like create property named items and store value of item inside it. which after becomes props = {items : "Dal"} */}
      <ErrorMessage items={fooditem}></ErrorMessage>
      <FoodItems items={fooditem}></FoodItems>
    </>
  );
}

export default App;
