import { createContext, useState, useReducer  } from "react";

export const FooditemsContext = createContext({
  fooditem : [],
  handleonKeyDown : () => {},
  deleteFoodItem : () => {},
  clearAllitems : () => {},
  restoreAllitems : () => {}
});

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

const Fooditemcontextprovider = ({children}) => {
  
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

      // whenever u dispatch an action react internally calls our reducer function fooditeReducer(currentState, action)
      // This currentState is initialState which [] passed as 2nd arguement when useReducer is called. i.e currfooditems = [] whereas action = {
      //   type: "NEW_ITEM",
      //   payload: {
      //     itemname,
      //   },
      // };
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

  return <FooditemsContext.Provider 
  value={{
    fooditem, 
    handleonKeyDown,
    deleteFoodItem,
    clearAllitems,
    restoreAllitems
  }}
  >
  {children}
  </FooditemsContext.Provider>
}

export default Fooditemcontextprovider;