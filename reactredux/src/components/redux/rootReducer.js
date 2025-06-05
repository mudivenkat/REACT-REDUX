import { combineReducers } from "redux";
import buggerReducer from "./bugger/BuggerReducer";
import pizzaReducer from "./pizza/PizzaReducer";

export const rootReducer = combineReducers(
  {
    burger: buggerReducer,
    pizza: pizzaReducer
  }
)