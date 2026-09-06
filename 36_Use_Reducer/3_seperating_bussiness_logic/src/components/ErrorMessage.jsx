import { useContext } from "react";
import { FooditemsContext } from "../store/food-items-store";

const ErrorMessage = () => {

  const { fooditem } = useContext(FooditemsContext);
  // console.log(fooditemsfromcontext_inErrorcmp);

  return (
    <>
    {fooditem.length === 0 && <h3>I am Still Hungry</h3>}
  </>
  );
};

/* 
previous code : 
const ErrorMessage = ( {items} ) => {

  return (
    <>
    {items.length === 0 && <h3>I am Still Hungry</h3>}
  </>
  );
};
*/

export default ErrorMessage;