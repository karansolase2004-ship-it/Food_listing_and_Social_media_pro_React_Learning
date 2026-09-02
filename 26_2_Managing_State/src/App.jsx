import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/fooditems';
import ErrorMessage from './components/ErrorMessage';
import React from "react";
import Container from './components/Container';
import FoodInput from './components/foodinput'
import { useState } from "react";

function App() {

  let [fooditem, setfooditem] = useState(['Dal', 'Green Vegetables', 'Salad', 'Roti', 'Milk']);
   
   const handleonKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newfooditem = event.target.value;
      // to make value clear after pressing enter
      event.target.value = "";
      let newItems = [...fooditem, newfooditem];
      console.log(`${newfooditem}`);
      setfooditem(newItems);
    }
    //  console.log(event);
  }

  return ( 
    <>
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <FoodInput handleonKeyDown={handleonKeyDown}></FoodInput>
      <ErrorMessage items={fooditem}></ErrorMessage>
      <FoodItems items={fooditem}></FoodItems>
    </Container>

 {/*    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut nam quos eveniet cum esse quae natus quisquam quasi odit maxime deleniti quam, pariatur, doloremque dolores qui minima vero animi.</p>
    </Container> */}
    </>
  );
}

export default App;
