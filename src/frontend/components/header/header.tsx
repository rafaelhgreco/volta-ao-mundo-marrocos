import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export const Header = () => {
    // Dados dos menus
    const navItems = [
        {
            title: "Serviços",
            links: [
                { name: "Opção 1", path: "/servicos/opcao1" },
                { name: "Opção 2", path: "/servicos/opcao2" },
            ],
        },
        {
            title: "Sobre",
            links: [
                { name: "Nossa História", path: "/sobre/historia" },
                { name: "Equipe", path: "/sobre/equipe" },
            ],
        },
        {
            title: "Contato",
            links: [
                { name: "Email", path: "/contato/email" },
                { name: "Localização", path: "/contato/localizacao" },
            ],
        },
    ];

    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-between px-6">
                <nav className="flex space-x-6">
                    {/* Links simples */}
                    <Link
                        to="/"
                        className="self-center text-gray-700 hover:text-blue-500"
                    >
                        Home
                    </Link>

                    {/* Dropdowns */}
                    {navItems.map((item) => (
                        <Menu key={item.title} as="div" className="relative">
                            <MenuButton className="text-gray-700 hover:text-blue-500">
                                {item.title}
                            </MenuButton>
                            <MenuItems className="absolute mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                                {item.links.map((link) => (
                                    <MenuItem key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            {link.name}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    ))}
                </nav>

                <div className="flex-3 flex justify-center items-center">
                    <Link to="/">
                        <img
                            src="/images/flag-marrocos.jpg"
                            alt="Logo"
                            className="h-20 rounded-lg"
                        />
                    </Link>
                </div>

                <div className="flex-1 flex justify-end">
                    <Link
                        to="/duvidas"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Tirar Dúvida
                    </Link>
                </div>
            </div>
        </header>
    );
};
