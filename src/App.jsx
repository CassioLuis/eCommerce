import "./App.css";
import Cardcart from "./cardCart.jsx";

const navBar = () => {
  return (
    <div className="h-full flex flex-col">
      <nav className="bg-gray-400 h-[10vh] flex items-center justify-between px-5 grid-cols-full">
        <div className="flex">
          <button className="drop-shadow-md bg-gray-300 rounded flex content-center mx-2 px-4 py-2">
            Botao
          </button>
          <button className="drop-shadow-md bg-gray-300 rounded flex content-center mx-2 px-4 py-2">
            Botao
          </button>
          <button className="drop-shadow-md bg-gray-300 rounded flex content-center mx-2 px-4 py-2">
            Botao
          </button>
        </div>
        <div className="flex">
          <button className="drop-shadow-md bg-gray-300 rounded-full flex content-center mx-2 px-4 py-2">
            a
          </button>
        </div>
      </nav>
      <div className="h-[90vh] bg-gray-100 flex">
        <div className="flex flex-col w-[70vw]">
          <header className="flex items-center bg-gray-300 px-10 py-5 h-[10vh] w-full">
            Produtos
          </header>
          <main className="b g-gray-200 h-[90vh] w-full py-5 px-10">
            asdasd
          </main>
        </div>
        <aside className="flex bg-gray-200 h-full w-[30vw] flex-col">
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
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
            <Cardcart />
          </div>
          <div className="h-[20vh] border-t-2 border-indigo-500 p-6 flex">
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
                ou Continuar Comprando ->
              </p>
            </div>
          </div>
        </aside>
      </div>
      <div id="pai" className="bg-gray-600/[.54] h-full w-full fixed flex justify-center items-center hidden">
        <div id="filho" className="text-white bg-gray-600 h-[50vh] w-[50vw] p-6">
          asdasdasd
        </div>
      </div>
    </div>
  );
};

export default navBar;

// 494,66 x 961 com varios
// 478,66 x 787,5 com varios
// 461,66 x 200

// 500,33 x 887,14 com poucos
// 484,33 x 725,94 com poucos
// 467,33 x 200
