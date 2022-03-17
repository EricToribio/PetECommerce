import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import HomePage from "./views/HomePage";

function App() {
  const [cartItems , setCartItems ] = useState(0) 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage cartItems={cartItems} setCartItems={setCartItems} />

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
