import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/fooditems';
import ErrorMessage from './components/ErrorMessage';
import React from "react";
import Container from './components/Container';
import FoodInput from './components/foodinput';
import Clear_and_restore from './components/clear_and_restore';
import Fooditemcontextprovider from './store/food-items-store';

function App() {

  return (
    <Fooditemcontextprovider>
      <Container>
        <h1 className="food-heading">
          Healthy Foods
        </h1>
        <FoodInput/>
        <ErrorMessage/>
        <FoodItems/>
        <Clear_and_restore/>
      </Container>
      </Fooditemcontextprovider>
  );
}

export default App;