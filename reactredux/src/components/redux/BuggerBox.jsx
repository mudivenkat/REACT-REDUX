import React from 'react'
import { connect } from 'react-redux'
import { orderBugger } from './bugger/BuggerActions'
function BuggerBox(props) {
  return (
    <div className='container'>
      <h2 className='text'>Number of  Bugger is :{props.buggerCount} </h2>
      <button className="btn" onClick={props.orderBugger}>Order Bugger</button>
    
      
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    
    buggerCount:state.burger.buggerCount 
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    orderBugger:()=>{
      dispatch(orderBugger())
    }
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(BuggerBox)
