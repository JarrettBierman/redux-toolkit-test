import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, double, reset } from '../features/counterSlice';

function Counter() {
    const num = useSelector(state => state.counter.num);
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increase());
      }
      
      const handleDecrease = () => {
        dispatch(decrease());
      }
    
      const handleDouble = () => {
        dispatch(double());
      }
    
      const handleReset = () => {
        dispatch(reset());
      }

    return (
    <div className="m-3">
        <h3>Number: {num}</h3>
        <button className="btn btn-success mx-2" onClick={handleIncrease}>+</button>
        <button className="btn btn-success mx-2" onClick={handleDecrease}>-</button>
        <button className="btn btn-success mx-2" onClick={handleDouble}>X</button>
        <button className="btn btn-success mx-2" onClick={handleReset}>0</button>
    </div>
    )
};
export default Counter;