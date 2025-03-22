import { Request, Response } from "express";

// Simulação de um banco de dados
const users = [
    { id: 1, nome: "Dadda", email: "alice@email.com" },
    { id: 2, nome: "Bob", email: "bob@email.com" },
];

const getAllUsers = (res: Response) => {
    res.status(200).json(users);
};

const getUserById = (req: Request, res: Response): void => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        res.status(404).json({ error: "Usuário não encontrado" });
        return;
    }

    res.status(200).json(user);
};

export default { getAllUsers, getUserById };
