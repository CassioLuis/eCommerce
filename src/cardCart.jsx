import React from "react";
import { useState } from "react";
// import Incrementdecrement from "./Incrementdecrement";

const cardCart = ({ nome }) => {

  const inputValue = (el) => document.querySelector(el);
  // console.log(inputValue(".content").value);

  const increment = () => {
    if (inputValue(".content").value < 5) inputValue(".content").value++;
  }
  const decrement = () => {
    if (inputValue(".content").value > 1) inputValue(".content").value--;
  }

  // const convertPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const [imputValue, setImputValue] = useState()
  // const [unitPrice, setUnitPrice] = useState(price)
  // console.log(unitPrice);
  console.log(imputValue);


  return (
    <div className="h-[180px] w-full flex border-b border-gray-300 py-6">
      <div className="rounded bg-gray-200 border border-gray-300 h-full w-48"></div>
      <div className="w-full h-full flex pl-3 flex-col justify-between items-between">
        <div className="flex justify-between">
          <p>{nome}</p>
          <p>{imputValue}</p>
        </div>
        <p className="text-sm -mt-10">Caracteristica</p>
        <div className="flex items-between justify-between">
          <label className="text-sm flex" htmlFor="Qtd.">
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
                readOnly
                onChange={e => setImputValue(e.target.value)} />
              <input
                className="increment w-5 cursor-pointer ease-in duration-200 bg-orange-400 hover:bg-orange-500 rounded text-l font-bold"
                type="button"
                value="+"
                onClick={increment}
              />
            </div >
          </label>
          <button className="text-red-600 px-2 rounded text-sm hover:bg-gray-300 ease-in duration-200 box-border">
            remover
          </button>
        </div>
      </div>
    </div>
  );
};

export default cardCart;
