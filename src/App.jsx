import './App.css'

const navBar = () => {
  return (
    <div className="h-full">
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
      <div className="h-full">
        <header className="bg-gray-300 px-10 py-5 h-20">Produtos</header>
        <aside className="w-10 bg-blue-200 right">aside</aside>
        <main className="bg-gray-200 h-full">main</main>
      </div>
    </div>
  );
};

export default navBar;
