import { useState, useContext } from "react";
import Item from "./Item.jsx";
import { FooditemsContext } from "../store/food-items-store.jsx";

const FoodItems = () => {

  const {fooditem, deleteFoodItem} = useContext(FooditemsContext);

  let [activeItems, SetActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    // current item will get added in activeItems 
    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
  }
  
  return ( 
    <>
      <ul className="list-group">
        {fooditem.map((item) => ( 
          <Item 
          key={item} 
          fooditem={item} 
          bought = {activeItems.includes(item)}
          handleBuyButtonClicked={() => onBuyButton(item)}
          handledeletebuttonclicked = {() => deleteFoodItem(item)}
          >
          </Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;