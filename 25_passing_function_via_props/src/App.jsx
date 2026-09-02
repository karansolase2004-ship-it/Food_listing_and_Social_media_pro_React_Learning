import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/fooditems';
import ErrorMessage from './components/ErrorMessage';
import React from "react";
import Container from './components/Container';
import FoodInput from './components/foodinput'

function App() {

   let fooditem = ['Dal', 'Green Vegetables', 'Salad', 'Roti', 'Milk', 'Ghee', 'Chicken'];

   let texttoshow = "Food Item Entered by user";
   
   const handleOnChange = (event) => {
     console.log(event.target.value)
     texttoshow = event.target.value;
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
