const cardCart = () => {
  return (
    <div className="h-[180px] w-full flex border-b border-gray-300 py-6">
      <div className="rounded bg-gray-200 border border-gray-300 h-full w-48"></div>
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
  );
};

export default cardCart;
