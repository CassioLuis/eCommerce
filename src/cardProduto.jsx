import React from "react";

import Filmes from './produtos.json'

const cardProduto = () => {

  const select = (e) => document.querySelector(e);

  const clicar = () => {
    select(".cardProduto").addEventListener("click", (e) => {
      console.dir(e)
    })
  }

  return (
    <div className="container-filmes pt-6 px-[2vw] justify-center grid gap-5 grid-cols-auto-fit">
      {Filmes.filmes_list.map((item, index) => {
        // const select = (el) => document.querySelector(el);
        return (
          <div
            key={index}
            className="cardProduto container-filme p-3 w-full flex flex-col justify-center items-center hover:drop-shadow-sm border cursor-pointer"
            onClick={clicar}
          >
            <img src={item.img} alt="" className="" />
            <div className="flex justify-center flex-col">
              <h1 className="text-center font-bold">{item.titulo}</h1>
              <h1 className="text-center text-sm mb-2">{item.subTitulo}</h1>
              {/* <p className="">{item.categoria}</p> */}
            </div>
            {/* <button onClick={clique}
              className="botaoAlugar bg-gray-900 text-white font-bold w-full rounded p-1"
            >
              Alugar
            </button> */}
          </div>
        );
      })}
    </div>
  );
};
export default cardProduto;
