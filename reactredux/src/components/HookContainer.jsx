 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
 
 function HookContainer() {
  const numberOfPizzas=  useSelector(state=> state.numOfPizzas);
    console.log("numberOfPizzas", numberOfPizzas);
    console.log(useDispatch(),"useDispatch"); 

   return (
     <div className='container'>
        <h2 className='text'>Number of Pizza Available:- {numberOfPizzas}</h2>
       <button className="btn">Order Pizza</button>

     </div>
   )
 }
 
 export default HookContainer
 