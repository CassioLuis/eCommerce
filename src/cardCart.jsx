const cardCart = () => {
  return (
    <div className="h-[18vh] w-full flex border-b-2 border-indigo-500 py-6">
      <div className="rounded bg-gray-200 h-full w-48 border-2 border-indigo-500"></div>
      <div className="w-full h-full flex pl-3 flex-col justify-between items-between">
        <div className="flex justify-between">
          <p>Nome do Item</p>
          <p>R$ 500,00</p>
        </div>
        <p className="text-sm -mt-10">Caracteristica</p>
        <div className="flex items-between justify-between">
          <label className="text-sm flex" htmlFor="Qtd.">
            Qtd
            <button className="font-bold border-2 border-black">-</button>
            <input
              className="w-10 text-center border-2 border-black"
              type="number"
              nome="qtd"
              min="1"
              max="500"
              step="1"
              value="1"
            ></input>
            <button className="font-bold border-2 border-black">+</button>
          </label>
          <button className="bg-gray-900 text-white p-1 rounded font-bold text-sm">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default cardCart;
