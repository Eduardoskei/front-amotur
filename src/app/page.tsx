'use client'
import { useRef } from "react";
import Image from "next/image";

export default function Home() {
    const popUp1 = useRef<HTMLDialogElement | null>(null)
    const popUp2 = useRef<HTMLDialogElement | null>(null)


    const openModal1 = () => popUp1.current?.showModal()
    const closeModal1 = () => popUp1.current?.close()

    const openModal2 = () => popUp2.current?.showModal()
    const closeModal2 = () => popUp2.current?.close()

    return (
        <div className="min-h-screen">
            {/* NavBar */}
            <div className="flex justify-between items-center bg-white text-black px-4 py-3">
                <Image
                    src={'https://lirp.cdn-website.com/3b6c9aee/dms3rep/multi/opt/logo-amotur+%282%29-1920w.png'}
                    alt="amotur-logo"
                    width={180}
                    height={10}
                />
                <ul 
                    id="nav-list"
                    className="flex items-center text-xl"
                >
                    <li className="ml-10 cursor-pointer">Sobre</li>
                    <li className="ml-10 cursor-pointer">Entrar</li>
                    <li className="ml-10 cursor-pointer">Cadastrar</li>
                    <Image
                        className="border-2 border-black rounded-full ml-5"
                        src="/default-user.svg"
                        alt="default-user"
                        width={35}
                        height={35}
                    />
                </ul>
            </div>

            <div className="mask-b-from-70% mask-b-to-100% bg-[url('https://upload.wikimedia.org/wikipedia/commons/f/fa/Icarai-de-amontada-coqpraia.jpg')]
            bg-cover bg-[center_bottom_15%] h-55 w-full"></div>

            {/* Pop-Ups */}
            <div id="pop-ups" className="flex justify-self-center mt-5 p-10 w-3/4 justify-between items-center">

                {/* Instruções */}
                <button onClick={openModal1} className="bg-custom-blue border 
                border-cyan-700 text-white h-10 w-30 text-xl px-2.5 py-1.5 rounded-lg 
                hover:scale-105 hover:shadow-lg cursor-pointer transition duration-300">
                    Instruções
                </button>
                <dialog ref={popUp1} className="justify-self-center self-center 
                w-1/2 px-10 py-6 rounded-2xl shadow-2xl backdrop:bg-dialog-backdrop">
                    <h2 className="text-center font-bold text-2xl mb-4">Navegando pelo mapa</h2>
                    <p className="text-lg mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Vitae laudantium illo amet voluptatibus aspernatur 
                        pariatur, deleniti autem fugiat modi explicabo placeat 
                        nemo exercitationem commodi officiis suscipit adipisci 
                        eos eveniet magni!</p>
                    <button onClick={closeModal1} className="bg-custom-blue border 
                    border-cyan-700 text-white text-lg px-2 py-1 rounded-lg 
                    hover:scale-105 hover:shadow-lg cursor-pointer transition duration-300">Fechar</button>
                </dialog>

                {/* Guia */}
                <button onClick={openModal2} className="bg-custom-blue border 
                border-cyan-700 text-white h-10 w-30 text-xl px-2.5 py-1.5 rounded-lg 
                hover:scale-105 hover:shadow-lg cursor-pointer transition duration-300">
                    Guia
                </button>
                <dialog ref={popUp2} className="justify-self-center self-center 
                w-1/2 px-10 py-6 rounded-2xl shadow-2xl backdrop:bg-dialog-backdrop">
                    <h2 className="text-center font-bold text-2xl mb-4">Interagindo com os ícones</h2>
                    <p className="text-lg mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Vitae laudantium illo amet voluptatibus aspernatur 
                        pariatur, deleniti autem fugiat modi explicabo placeat 
                        nemo exercitationem commodi officiis suscipit adipisci 
                        eos eveniet magni!</p>
                    <button onClick={closeModal2} className="bg-custom-blue border 
                    border-cyan-700 text-white text-lg px-2 py-1 rounded-lg 
                    hover:scale-105 hover:shadow-lg cursor-pointer transition duration-300">Fechar</button>
                </dialog>
            </div>

            {/* Mapa */}
            <div className="flex justify-center items-center px-10 my-5">
                <div className="flex justify-center items-center w-full h-75 bg-gray-200 rounded-md">
                    <p>Mapa</p>
                </div>
            </div>
        </div>
    );
}
