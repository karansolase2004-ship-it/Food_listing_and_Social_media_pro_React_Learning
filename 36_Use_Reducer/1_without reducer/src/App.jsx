import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/fooditems';
import ErrorMessage from './components/ErrorMessage';
import React from "react";
import Container from './components/Container';
import FoodInput from './components/foodinput';
import Clear_and_restore from './components/clear_and_restore';
import { useState, useRef } from "react";
import { FooditemsContext } from './store/food-items-store';
import { useReducer } from 'react';

function App() {
  let [fooditem, setfooditem] = useState([
    "Dal",
    "Green Vegetables",
    "Salad",
    "Roti",
    "Milk",
  ]);

  const [deleteditems, setdeleteditems] = useState([]);

  const handleonKeyDown = (event) => {
    if (event.key === "Enter") {
      let newfooditem = event.target.value;

      // To make the input field empty after pressing Enter.
      event.target.value = "";

      let newItems = [
        ...fooditem,
        newfooditem,
      ];

      console.log(`${newfooditem}`);

      setfooditem(newItems);
    }
  };

  const deleteFoodItem = (item) => {
    const updatedItems = fooditem.filter(
      (food) => food !== item
    );

    setfooditem(updatedItems);

    // Below updates deleteditems.
    setdeleteditems([
      ...deleteditems,
      item,
    ]);
  };

  const restoreAllitems = () => {
    setfooditem([
      ...fooditem,
      ...deleteditems,
    ]);

    setdeleteditems([]);
  };

  const clearAllitems = () => {
    setdeleteditems([
      ...fooditem,
      ...deleteditems,
    ]);

    setfooditem([]);
  };

  // const defaultfooditems = ["CHicken"];

  return (
    // <FooditemsContext.Provider value={defaultfooditems}>
    <FooditemsContext.Provider value={fooditem}>
      <Container>
        <h1 className="food-heading">
          Healthy Foods
        </h1>

        <FoodInput
          handleonKeyDown={handleonKeyDown}
        />

        <ErrorMessage items={fooditem} />

        <FoodItems
          items={fooditem}
          deleteFoodItem={deleteFoodItem}
        />

        <Clear_and_restore
          clearAllitems={clearAllitems}
          restoreAllitems={restoreAllitems}
        />
      </Container>
    </FooditemsContext.Provider>
  );
}

export default App;
