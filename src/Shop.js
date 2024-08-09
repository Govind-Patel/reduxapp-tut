import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreaters} from "./state/index"



const Shop = () => {
  const dispatch = useDispatch();
  const {withdrawMoney,depositMoney}= bindActionCreators(actionCreaters,dispatch);
  return (
    <div>
      <h3>Diposit/Withdraw Money</h3>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreaters.withdrawMoney(100))}} >-</button>
        Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreaters.depositMoney(100))}} >+</button>
       */}
      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}} >-</button>
        Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}} >+</button>

    </div>
  )
}

export default Shop
