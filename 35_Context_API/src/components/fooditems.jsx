import { useState } from "react";
import Item from "./Item.jsx";
import { useContext } from "react";
import { FooditemsContext } from "../store/food-items-store.jsx";

const FoodItems = ( {items} ) => {

  const fooditemsfromcontext_infooditemscmp = useContext(FooditemsContext);
  console.log(fooditemsfromcontext_infooditemscmp);

  let [activeItems, SetActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    // current item will get added in activeItems 
    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
  }
  
  return ( 
    <>
      <ul className="list-group">
        {fooditemsfromcontext_infooditemscmp.map((item) => ( 
          <Item 
          key={item} 
          fooditem={item} 
          bought = {activeItems.includes(item)}
          handleBuyButtonClicked={(event) => onBuyButton(item, event)}>
          </Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;