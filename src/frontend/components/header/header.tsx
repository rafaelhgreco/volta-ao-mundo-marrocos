import { useState } from "react";
import "./header.css";

function Header() {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Navegação */}
                <nav className="flex space-x-6">
                    <Dropdown
                        title="Serviços"
                        options={["Opção 1", "Opção 2", "Opção 3"]}
                    />
                    <Dropdown
                        title="Sobre"
                        options={["Nossa História", "Equipe", "Missão"]}
                    />
                    <Dropdown
                        title="Contato"
                        options={["Email", "Telefone", "Localização"]}
                    />
                </nav>

                {/* Logo */}
                <div className="flex-3 flex justify-center items-center">
                    <img
                        src="/images/flag-marrocos.jpg"
                        alt="Logo"
                        className="h-20 rounded-lg"
                    />
                </div>

                {/* Botão de Dúvidas */}
                <div className="flex-1 flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Tirar Dúvida
                    </button>
                </div>
            </div>
        </header>
    );
}

function Dropdown({ title, options }: { title: string; options: string[] }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="text-gray-700 font-medium hover:text-blue-500"
                onClick={() => setOpen(!open)}
            >
                {title}
            </button>
            {open && (
                <ul className="absolute bg-white shadow-md mt-2 rounded-lg py-2 w-40">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Header;
