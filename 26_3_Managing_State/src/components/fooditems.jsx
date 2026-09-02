import { useState } from "react";
import Item from "./Item.jsx";

const FoodItems = ( {items} ) => {

  
  let [activeItems, SetActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    // current item will get added in activeItems 
    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
  }
  
  return ( 
    <>
      <ul className="list-group">
        {items.map((item) => ( 
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