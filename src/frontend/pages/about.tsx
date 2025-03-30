import { FaReact, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiReactrouter } from "react-icons/si";

export const AboutPage = () => {
    const tecnologias = [
        {
            nome: "React",
            descricao: "Biblioteca JavaScript para construção de interfaces",
            link: "https://reactjs.org",
            icone: <FaReact className="text-blue-500 text-3xl" />,
        },
        {
            nome: "TypeScript",
            descricao: "JavaScript com sintaxe para tipos",
            link: "https://www.typescriptlang.org",
            icone: <SiTypescript className="text-blue-600 text-3xl" />,
        },
        {
            nome: "React Router",
            descricao: "Roteamento para aplicações React",
            link: "https://reactrouter.com",
            icone: <SiReactrouter className="text-red-500 text-3xl" />,
        },
        {
            nome: "Tailwind CSS",
            descricao: "Framework CSS utilitário",
            link: "https://tailwindcss.com",
            icone: <SiTailwindcss className="text-cyan-400 text-3xl" />,
        },
        {
            nome: "GitHub Pages",
            descricao: "Hospedagem gratuita para projetos",
            link: "https://pages.github.com",
            icone: <FaGithub className="text-gray-800 text-3xl" />,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-center mb-8 text-red-600">
                    Tecnologias Utilizadas
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tecnologias.map((tech, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex items-start"
                        >
                            <div className="mr-4 mt-1">{tech.icone}</div>
                            <div>
                                <h2 className="text-xl font-semibold mb-2">
                                    <a
                                        href={tech.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline flex items-center"
                                    >
                                        {tech.nome}
                                    </a>
                                </h2>
                                <p className="text-gray-600">
                                    {tech.descricao}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/"
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Voltar para Home
                    </a>
                </div>
            </div>
        </div>
    );
};
