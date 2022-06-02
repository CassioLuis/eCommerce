import './App.css'

const navBar = () => {
  return (
    <div className="h-full flex flex-col">
      <nav className="navegacao bg-gray-400 h-20 flex center items-center justify-between px-5 grid-cols-full">
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
      <div className="h-full bg-gray-100 flex">
        <div className="flex flex-col w-4/6">
          <header className="flex items-center bg-gray-300 px-10 py-5 h-20 w-full">
            Produtos
          </header>
          <main className="b g-gray-200 h-full w-full py-5 px-10">asdasd</main>
        </div>
        <aside className="bg-gray-200 h-full w-2/6 py-5 px-5 -mr-[100%]">asdasd</aside>
      </div>
    </div>
  );
};

export default navBar;
