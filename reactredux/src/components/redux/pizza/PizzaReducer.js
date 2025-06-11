import { ORDER_PIZZA } from "./PizzaType";


const initialState = {
  numOfPizzas: 1000
}

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        numOfPizzas: state.numOfPizzas - action.payload

      }
    default:
      return state;
  }
}

export default pizzaReducer;