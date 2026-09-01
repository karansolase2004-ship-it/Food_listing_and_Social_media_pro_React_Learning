import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/fooditems';
import ErrorMessage from './components/ErrorMessage';
import React from "react";
import Container from './components/Container';

function App() {

   let fooditem = ['Dal', 'Green Vegetables', 'Salad', 'Roti', 'Milk', 'Ghee', 'Chicken'];

  return ( 
    <>
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      {/* This is like create property named items and store value of item inside it. which after becomes props = {items : "Dal"} */}
      <ErrorMessage items={fooditem}></ErrorMessage>
      <FoodItems items={fooditem}></FoodItems>
    </Container>

    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut nam quos eveniet cum esse quae natus quisquam quasi odit maxime deleniti quam, pariatur, doloremque dolores qui minima vero animi.</p>
    </Container>
    </>
  );
}

export default App;
