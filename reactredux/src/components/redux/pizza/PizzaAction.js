import { ORDER_PIZZA } from "./PizzaType"

// action creators
export const orderPizza = (number) => {
  return {
    type: ORDER_PIZZA,
    payload: number
  }
}
