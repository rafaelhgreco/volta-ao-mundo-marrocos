import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-4">
                <div className="order-2 md:order-1">
                    <NavLink to="/">
                        <img
                            src="/images/flag-marrocos.jpg"
                            alt="Logo"
                            className="h-16 md:h-20 rounded-lg"
                        />
                    </NavLink>
                </div>

                <nav className="order-1 md:order-2 flex flex-wrap justify-center gap-4 md:gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `px-3 py-1 rounded-md ${
                                isActive
                                    ? "bg-blue-100 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/servicos"
                        className={({ isActive }) =>
                            `px-3 py-1 rounded-md ${
                                isActive
                                    ? "bg-blue-100 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`
                        }
                    >
                        Serviços
                    </NavLink>

                    <NavLink
                        to="/sobre"
                        className={({ isActive }) =>
                            `px-3 py-1 rounded-md ${
                                isActive
                                    ? "bg-blue-100 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`
                        }
                    >
                        Sobre
                    </NavLink>

                    <NavLink
                        to="/contato"
                        className={({ isActive }) =>
                            `px-3 py-1 rounded-md ${
                                isActive
                                    ? "bg-blue-100 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`
                        }
                    >
                        Contato
                    </NavLink>
                </nav>

                <div className="order-3">
                    <NavLink
                        to="/contato"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-medium"
                    >
                        Tirar Dúvida
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
