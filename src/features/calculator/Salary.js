import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  {reset, incrementByAmount, setBasic} from'./salarySlice';

const Salary = () => {
    // const salary = useSelector((state) => state.salary.setBasic);
    // const dispatch = useDispatch();

    // const [incrementAmount, setIncrementAmount] = useState(0);

    // const addValue = Number(incrementAmount) || 0;

    // const resetAll = () =>{
    //     setIncrementAmount(0);
    //     dispatch(reset());
    // }

  return (
    <section>
        {/* <p>{salary}</p>
        <p>Basic salary {incrementAmount}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
        </div>
        <input 
            type="text" 
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <div>
            <button onClick={()=> dispatch(incrementByAmount(addValue))}>
                Add amount
            </button>
            <button onClick={resetAll}>Reset Salary</button>
        </div> */}
    </section>
  )
}

export default Salary