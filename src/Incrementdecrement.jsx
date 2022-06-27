import React from "react";

const Incrementdecrement = () => {

  const inputValue = (el) => document.querySelector(el);

  const increment = () => {
    if (inputValue(".content").value < 5) inputValue(".content").value++;
  }
  const decrement = () => {
    if (inputValue(".content").value > 1) inputValue(".content").value--;
  }


  return (
    < div className="containerBtn rounded border flex items-center justify-center bg-orange-400 p-1 shadow-sm" >
      <input
        className="decrement w-5 cursor-pointer ease-in duration-200 bg-orange-400 hover:bg-orange-500 rounded text-l font-bold"
        type="button"
        value="-"
        onClick={decrement}
      />
      <input
        className="content focus:outline-none text-center w-10 bg-orange-400 border-x border-orange-600 mx-1 font-bold"
        type="number"
        value="1"
        readOnly />
      <input
        className="increment w-5 cursor-pointer ease-in duration-200 bg-orange-400 hover:bg-orange-500 rounded text-l font-bold"
        type="button"
        value="+"
        onClick={increment}
      />
    </div >
  )
}
export default Incrementdecrement;