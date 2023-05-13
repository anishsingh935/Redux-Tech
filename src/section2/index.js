import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseValue, decreaseValue } from "../Action/index";

function Index() {
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increaseValue(5))}>Increment data</button>
      <button onClick={() => dispatch(decreaseValue(5))}>Decrement data</button>
    </div>
  )
}

export default Index