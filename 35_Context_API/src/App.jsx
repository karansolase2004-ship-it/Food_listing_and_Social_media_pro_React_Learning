import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/fooditems';
import ErrorMessage from './components/ErrorMessage';
import React from "react";
import Container from './components/Container';
import FoodInput from './components/foodinput'
import { useState, useRef } from "react";
import { FooditemsContext } from './store/food-items-store';

function App() {

  let [fooditem, setfooditem] = useState([/* 'Dal', 'Green Vegetables', 'Salad', 'Roti', 'Milk' */]);
   
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

  // const defaultfooditems = ['CHicken'];

  return ( 
    // <FooditemsContext.Provider value={defaultfooditems}>
    <FooditemsContext.Provider value={fooditem}>
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <FoodInput handleonKeyDown={handleonKeyDown}></FoodInput>
      <ErrorMessage items={fooditem}></ErrorMessage>
      <FoodItems items={fooditem}></FoodItems>
    </Container>
    </FooditemsContext.Provider>
  );
}

export default App;
