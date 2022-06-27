import React from 'react'
import './App.css'
import Modal from './modal.jsx'
import Carrinho from './carrinho.jsx'
import Cardproduto from './cardProduto.jsx'
// import { useTransition } from 'react-transition-state'

export default function navBar() {

  // const [state, toggle] = useTransition({
  //   timeout: 150,
  //   preEnter: true,
  // });

  return (

    <div className="h-[100vh] flex flex-col" >
      <nav id='tamanho' className="bg-gray-400 h-[10vh] px-5 flex justify-end items-center">
        <input
          // onClick={() => toggle()}
          type="button"
          value="Carrinho"
          className='bg-orange-400 cursor-pointer hover:bg-orange-500 transition-all p-2 rounded' />
      </nav>
      <div className="bg-gray-100 flex overflow-x-hidden relative h-full">
        <div className="flex flex-col w-full overflow-y-auto">
          <header className="bg-gray-300 px-10 py-5 h-[5vh] leading-3">
            Filmes
          </header>
          <div>
            <Cardproduto />
          </div>
        </div>
        {/* <div className={`carrinho ${state}`}> */}
        <Carrinho />
        {/* </div> */}
      </div>
      <Modal />
    </div >
  )
}
