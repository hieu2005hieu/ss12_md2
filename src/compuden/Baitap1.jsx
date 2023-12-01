import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export default function Baitap1() {
  const data = useSelector(store => store)
  
    const distpath=useDispatch()
  return (
    <>
      count:{data.reduxser}
      <button onClick={() => distpath({ type: "hieu" })}>click</button>
    </>
  );
}
