import React from "react";

const modal = () => {
  return (
    <div
      id="pai"
      className="bg-gray-600/[.54] h-full w-full fixed flex justify-center items-center hidden"
    >
      <div
        id="filho"
        className="text-white bg-gray-800 h-[500px] w-[800px] p-6 rounded"
      >
        <div className="h-[18vh] w-full flex border-b-2 border-gray-500 py-6">
          <div className="rounded bg-gray-200 h-full w-48"></div>
          <div className="w-full h-full flex pl-3 flex-col justify-between items-between">
            <div className="flex justify-between">
              <p>Nome do Item</p>
              <p>R$ 500,00</p>
            </div>
            <p className="text-sm -mt-10">Caracteristica</p>
            <div className="flex items-between justify-between">
              <label className="text-sm flex" htmlFor="Qtd.">
                Qtd
                <button className="font-bold">-</button>
                <input
                  className="w-10 text-center"
                  type="number"
                  nome="qtd"
                  min="1"
                  max="500"
                  step="1"
                  defaultValue="1"
                ></input>
                <button className="font-bold">+</button>
              </label>
              <button className="bg-gray-900 text-white p-1 rounded font-bold text-sm">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
