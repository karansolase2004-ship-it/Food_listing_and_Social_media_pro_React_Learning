import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/fooditems';
import ErrorMessage from './components/ErrorMessage';
import React from "react";
import Container from './components/Container';
import FoodInput from './components/foodinput'
import { useState } from "react";

function App() {

   let fooditem = ['Dal', 'Green Vegetables', 'Salad', 'Roti', 'Milk', 'Ghee', 'Chicken'];

  //  let textstatearr = useState("Food Item Entered by user");
  //  let texttoshow = textstatearr[0];
  //  below is method which can change value of state at [0]
  //  let setTextState = textstatearr[1];

  // below we mentioned [] which show array destructuring.
  let [texttoshow, setTextState] = useState("Food Item Entered by User");

   console.log(`Current value of textState:${texttoshow}`);
   
   const handleOnChange = (event) => {
     console.log(event.target.value);
     setTextState(event.target.value);
  }

  return ( 
    <>
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={fooditem}></ErrorMessage>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{texttoshow}</p>
      <FoodItems items={fooditem}></FoodItems>
    </Container>

 {/*    <Container>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut nam quos eveniet cum esse quae natus quisquam quasi odit maxime deleniti quam, pariatur, doloremque dolores qui minima vero animi.</p>
    </Container> */}
    </>
  );
}

export default App;
