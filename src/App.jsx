import "./App.css";
import Modal from "./modal.jsx"
import Aside from "./carrinho.jsx"
import Cardproduto from "./cardProduto.jsx";
import Item from "./produtos.json"

const navBar = () => {
  return (
    <div className="h-full flex flex-col">
      <nav className="bg-gray-400 h-[10vh] w-full flex items-center justify-between px-5 ">
        <div className="flex">
          <button className="bg-gray-300 rounded flex content-center mx-2 px-4 py-2">
            Botao
          </button>
          <button className="bg-gray-300 rounded flex content-center mx-2 px-4 py-2">
            Botao
          </button>
          <button className="bg-gray-300 rounded flex content-center mx-2 px-4 py-2">
            Botao
          </button>
        </div>
        <div className="flex">
          <button className="bg-gray-300 rounded-full flex content-center mx-2 px-4 py-2">
            a
          </button>
        </div>
      </nav>
      <div className="bg-gray-100 flex overflow-x-hidden">
        <div className="flex flex-col w-full overflow-y-auto overflow-x-hidden">
          <header className="flex items-center bg-gray-300 px-10 py-5 h-[10vh] w-full">
            Produtos
          </header>
          <main className="g-gray-200 py-6 px-52 grid grid-cols-4 gap-4 justify-center grid-flow-row">
            {Item.produtos.map((item, index) => {
              return <Cardproduto valor={item} />;
            })}
          </main>
        </div>
        <Aside />
      </div>
      <Modal />
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
