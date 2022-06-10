import Filmes from "./produtos.json";

const cardProduto = () => {
  return (
    <div className="container-filmes py-6 justify-center grid grid-cols-4 gap-1">
      {Filmes.filmes.map((item, index) => {
        return (
          <div className="container-filme p-3 w-full flex flex-col justify-between hover:drop-shadow-sm transition ease-in-out border">
            <div className="w-full h-[190px]  rounded flex justify-center">
              <img src={item.img} alt="" className="w-full object-cover" />
            </div>
            <div className="flex justify-between">
              <h1 className="">{item.titulo}</h1>
              <p className="">{item.categoria}</p>
            </div>
            <h1 className="text-sm">{item.subTitulo}</h1>
            <button
              onClick={console.log("clicou")}
              className="bg-gray-900 text-white font-bold w-full rounded p-1"
            >
              Alugar
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default cardProduto;
