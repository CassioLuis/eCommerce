import React from "react";
import Cardcart from "./cardCart.jsx";

const aside = () => {

  const produtos = [
    {
      'nome': "Homem-aranha",
      price: 100.00
    }, {
      nome: "Homem-aranha",
      price: 100.00
    }, {
      nome: "Homem-aranha",
      price: 100.00
    }, {
      nome: "Homem-aranha",
      price: 100.00
    }, {
      nome: "Homem-aranha",
      price: 100.00
    }, {
      nome: "Homem-aranha",
      price: 100.00
    }
  ]

  return (
    <aside className="carrinho flex bg-gray-200 h-full w-[600px] flex-col">
      <div className="h-[80vh] overflow-auto p-6">
        <div className="flex justify-between">
          <h2>Carrinho</h2>
          <button>X</button>
        </div>
        {
          produtos.map((nome, index) => {
            return <Cardcart key={index} nome={nome.nome} price={nome.price} />
          })
        }
      </div>
      <div className="h-[200px] border-t border-gray-300 p-6 flex">
        <div className="w-full flex flex-col justify-between">
          <div className="flex justify-between">
            <p className="font-bold">Subtotal</p>
            <p className="font-bold">R$ 500,00</p>
          </div>
          <p className="text-sm text-gray text-top -mt-2">
            Frete e impostos calculados no fechamento da compra
          </p>
          <button className="bg-gray-900 text-white font-bold w-full p-1">
            Concluir Compra
          </button>
          <p className="text-sm text-gray text-center">
            ou Continuar Comprando
          </p>
        </div>
      </div>
    </aside>
  );
};
export default aside;
