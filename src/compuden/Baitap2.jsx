import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {action} from '../action/action.js'
export default function Baitap2() {
  function uuid() {
    return Math.floor(Math.random() * 9999999);
  }
  let data = useSelector((store) => store);
  let [sutdenst, setSutdenst] = useState({
    name: "",
    age: "",
    id: "",
  });
  let useDispatcha = useDispatch();
  const handlADD = (e) => {
    setSutdenst({ ...sutdenst, [e.target.name]: e.target.value });
  };
  console.log(sutdenst);
  const clickADD = () => {
    if (sutdenst.id) {
      useDispatcha(action("EDIT",sutdenst));

    } else {
      useDispatcha(action("ADD", { ...sutdenst, id: uuid() }));
    }
    setSutdenst({
      name: "",
      age: "",
      id:""
    })
  };
  const handlDELETE = (id) => {
    useDispatcha({
      type: "DELETE",
      payload: id,
    });
  };
      console.log(data);

  const handlEDIT = (item) => {
    setSutdenst(item)
  };
  return (
    <>
      <input
        type="text"
        name="name"
        value={sutdenst.name}
        onChange={handlADD}
      />
      <input type="text" name="age" value={sutdenst.age} onChange={handlADD} />
      <button onClick={clickADD}>{sutdenst.id?"Update":"Add"}</button>
      {data.todoReducer.map((item, index) => {
        return (
          <div key={index}>
            <li>
              {item.name} {item.age}
              <button onClick={() => handlEDIT(item)}>Edit</button>
              <button onClick={() => handlDELETE(item.id)}>Delete</button>
            </li>
          </div>
        );
      })}
    </>
  );
}
