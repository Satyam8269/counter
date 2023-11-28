import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment } from '../redux/action';

const Counter = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter:{count}</h1>
        <div>
            <button onClick={()=>dispatch(increment(1))}>INC BY 1</button>
            <button onClick={()=>dispatch(decrement(1))}>DEC BY 1</button>
        </div>
    </div>
  )
}

export default Counter