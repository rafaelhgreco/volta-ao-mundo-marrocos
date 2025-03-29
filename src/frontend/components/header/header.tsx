import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from "@headlessui/react";
import { Fragment } from "react";

interface DropdownProps {
    title: string;
    options: string[];
}

export const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto flex items-center justify-between px-6">
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

                <div className="flex-3 flex justify-center items-center">
                    <img
                        src="/images/flag-marrocos.jpg"
                        alt="Logo"
                        className="h-20 rounded-lg"
                    />
                </div>

                <div className="flex-1 flex justify-end">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Tirar Dúvida
                    </button>
                </div>
            </div>
        </header>
    );
};

const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
    return (
        <Menu as="div" className="relative">
            <MenuButton className="text-gray-700 font-medium hover:text-blue-500">
                {title}
            </MenuButton>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {options.map((option, index) => (
                        <MenuItem key={index}>
                            {({ active }: { active: boolean }) => (
                                <button
                                    className={`${
                                        active ? "bg-gray-100" : ""
                                    } text-gray-700 block w-full px-4 py-2 text-left`}
                                >
                                    {option}
                                </button>
                            )}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Transition>
        </Menu>
    );
};
