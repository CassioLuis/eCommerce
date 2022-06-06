const cardProduto = (props) => {
  return (
    <div className="p-3 w h-[300px] flex flex-col justify-between hover:drop-shadow-sm transition ease-in-out border">
      <div className="w-[200px] h-[190px] overflow-hidden rounded">
        <img src={props.valor.link} alt="" />
      </div>
      <div className="justify-between flex">
        <h1 className="">{props.valor.tipo}</h1>
        <p className="">R$ {props.valor.preco}</p>
      </div>
      <h1 className="text-sm">{props.valor.cor}</h1>
      <button className="bg-gray-900 text-white font-bold w-full rounded p-1">
        Comprar
      </button>
    </div>
  );
};
export default cardProduto;
