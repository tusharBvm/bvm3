import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log("count==>",count);

  const dispatch = useDispatch();

//   function dispatchHandler() {
//         dispatch(increment())
//         // console.log("dis incre==>",dispatch(increment()))
//         // console.log("incre==>",(increment()))
//   }

//   console.log("dispatchHandler==>",dispatchHandler);


  return (
    <>
    {/* <button onClick={dispatchHandler}>increment</button> */}
    <button onClick={() => dispatch(increment())}>increment</button>
      count : {count}
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default Counter;
