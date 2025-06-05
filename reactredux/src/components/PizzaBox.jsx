
import React from 'react'
import { orderPizza } from './redux/pizza/PizzaAction'
import { connect } from 'react-redux'

function PizzaBox(props) {
  console.log(props);
  const { numberOfPizzas, orderPizza } = props;

  return (
    <div className='container'> 
      <h2 className='text'>Number of Pizza Base Available- {numberOfPizzas}</h2>
      <button className="btn" onClick={orderPizza}>Order Pizza </button>
    </div>
  )
}

// mapStateToProps :-   This function takes the state of the store as an argument and returns an object which contains the data that will be available in the component as props.
 const mapStateToProps=(state)=>{
  return {
    numberOfPizzas: state.pizza.numOfPizzas
  }
 }
 // mapDispatchToProps :- This function takes the dispatch function as an argument and returns an object which contains the action creators that will be available in the component as props.
 const mapDispatchToProps=(dispatch)=>{
  return {
    orderPizza:()=>{
      dispatch(orderPizza())
    }
  }
 }


export default connect(mapStateToProps,mapDispatchToProps)(PizzaBox)
// connect() :- This function connects the component to the Redux store. It takes two arguments, mapStateToProps and mapDispatchToProps, and returns a higher-order component that wraps the original component. The wrapped component will receive the props returned by mapStateToProps and mapDispatchToProps.
