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

// main functions just dispatch the actions while state management is handled by below 
const fooditemReducer = (currfooditem, action) => {
  let newfooditem = currfooditem;

  if (action.type === "NEW_ITEM") {
    return [
      ...newfooditem,
      action.payload.itemname,
    ];
  } else if (action.type === "DELETE_ITEM") {
    return newfooditem.filter(
      (food) => food !== action.payload.itemname
    );
  } else if (action.type === "RESTORE_ITEM") {
    return [
      ...newfooditem,
      ...action.payload.deleteditems,
    ];
  } else if (action.type === "CLEAR_ALL_ITEMS") {
    return [];
  }

  return newfooditem;
};

function App() {
  /* let [fooditem, setfooditem] = useState([
    "Dal",
    "Green Vegetables",
    "Salad",
    "Roti",
    "Milk",
  ]); */

  const [deleteditems, setdeleteditems] = useState([]);

  const [fooditem, dispatchfooditems] = useReducer(
    fooditemReducer,
    []
  );

  const handleonKeyDown = (event) => {
    if (event.key === "Enter") {
      const itemname = event.target.value;
      event.target.value = "";

      const newItemAction = {
        type: "NEW_ITEM",
        payload: {
          itemname,
        },
      };

      dispatchfooditems(newItemAction);
    }
  };

  const deleteFoodItem = (item) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemname: item,
      },
    };

    dispatchfooditems(deleteItemAction);

    setdeleteditems((previousItems) => {
      return [...previousItems, item];
    });
  };

  const restoreAllitems = () => {
    const restoreItemAction = {
      type: "RESTORE_ITEM",
      payload: {
        deleteditems: deleteditems,
      },
    };

    dispatchfooditems(restoreItemAction);

    setdeleteditems([]);
  };

  const clearAllitems = () => {
    setdeleteditems((previousItems) => {
      return [
        ...fooditem,
        ...previousItems,
      ];
    });

    dispatchfooditems({
      type: "CLEAR_ALL_ITEMS",
    });
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