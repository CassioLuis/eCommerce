import Cardcart from "./cardCart.jsx";

const aside = () => {
  return (
    <aside className="flex bg-gray-200 h-full w-[800px] flex-col hidden">
      <div className="h-[80vh] overflow-auto p-6">
        <div className="flex justify-between">
          <h2>Carrinho</h2>
          <button>X</button>
        </div>
        <Cardcart />
        <Cardcart />
        <Cardcart />
        <Cardcart />
        <Cardcart />
        <Cardcart />
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
          <a href="#" className="text-sm text-gray text-center">
            ou Continuar Comprando
          </a>
        </div>
      </div>
    </aside>
  );
};
export default aside;
