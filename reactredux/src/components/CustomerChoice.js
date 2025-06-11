
import { orderPizza } from './redux/pizza/PizzaAction'
import { connect, } from 'react-redux'
import { useState } from 'react'

function CustomerChoice(props) {
  const { numberOfPizzas, orderPizza } = props;
  const [number, setNumber] = useState(1)

  return (
    <div className='container'>
      <h2 className='text'>Number of Pizza Base - {numberOfPizzas}</h2>

      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button className="btn" onClick={() => orderPizza(number)}>Order Pizza </button>
    </div>
  )
}

// mapStateToProps :-   This function takes the state of the store as an argument and returns an object which contains the data that will be available in the component as props.
const mapStateToProps = (state) => {
  return {
    numberOfPizzas: state.pizza.numOfPizzas
  }
}
// mapDispatchToProps :- This function takes the dispatch function as an argument and returns an object which contains the action creators that will be available in the component as props.
const mapDispatchToProps = (dispatch) => {
  return {
    orderPizza: (number) => {
      dispatch(orderPizza(number))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice)
// connect() :- This function connects the component to the Redux store. It takes two arguments, mapStateToProps and mapDispatchToProps, and returns a higher-order component that wraps the original component. The wrapped component will receive the props returned by mapStateToProps and mapDispatchToProps.
