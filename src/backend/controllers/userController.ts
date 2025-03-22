import { Request, Response } from "express";

// Simulação de um banco de dados
const users = [
    { id: 1, nome: "Dadda", email: "alice@email.com" },
    { id: 2, nome: "Bob", email: "bob@email.com" },
];

// 🟢 Lista todos os usuários
const getAllUsers = (req: Request, res: Response) => {
    res.status(200).json(users);
};

// 🟢 Busca usuário por ID
const getUserById = (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.status(200).json(user);
};

export default { getAllUsers, getUserById }; // 🔥 Exportando como objeto
