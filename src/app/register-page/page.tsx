'use client'
import { useState } from "react"

type FormData = {
    name: string;
    email: string;
    telephone: string;
    password: string;
}

type ResponseData = {
    name: string;
    email: string;
    telephone: string;
    password: string;
}

export default function PaginaCadastro() {
    const [formData, setFormData] = useState<FormData>(
        {name: "", email: "", telephone: "", password: ""})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {

    }

    return (
        <div className="flex justify-center items-center min-h-screen 
        min-w-screen sm:py-3 px-3 bg-blue-400">
            <div className="w-19/20 lg:w-7/20 md:w-1/2 shadow-lg rounded-md
            bg-white sm:px-11 py-6 px-8">
                <h1 className="font-bold text-3xl mb-6">
                    Cadastre-se
                </h1>
                <form className="w-full">
                    {/* Nome */}
                    <div>
                        <label className="block mb-2 text-xl lg:text-lg">
                            Nome
                        </label>
                        <input 
                            className="w-full text-md mb-4 border px-5 
                            py-2.5 lg:px-3 lg:py-1.5 rounded-lg"
                            type="text"
                            name="name"
                            value={formData.name}
                            placeholder="Digite seu nome completo"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-xl lg:text-lg">
                            Email
                        </label>
                        <input
                            className="w-full text-md mb-4 border px-5 
                            py-2.5 lg:px-3 lg:py-1.5 rounded-lg"
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Digite seu email"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    {/* Telefone */}
                    <div>
                        <label className="block mb-2 text-xl lg:text-lg">
                            Telefone
                        </label>
                        <input 
                            className="w-full text-md mb-4 border px-5 
                            py-2.5 lg:px-3 lg:py-1.5 rounded-lg"
                            type="tel"
                            name="telephone"
                            value={formData.telephone}
                            placeholder="Digite seu telefone"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    {/* Senha */}
                    <div>
                        <label className="block mb-2 text-xl lg:text-lg">
                            Senha
                        </label>
                        <input 
                            className="w-full text-md mb-8 border px-5 
                            py-2.5 lg:px-3 lg:py-1.5 rounded-lg"
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Crie sua senha"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <button className="w-full bg-blue-600 text-xl lg:text-lg 
                    text-white py-2.5 px-5 lg:px-3 lg:py-1.5 rounded-lg cursor-pointer">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}