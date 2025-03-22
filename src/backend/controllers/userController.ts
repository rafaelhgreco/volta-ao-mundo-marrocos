import express, { Request, Response } from "express";

const router = express.Router();

const users = [
    { id: 1, nome: "Alice", email: "alice@email.com" },
    { id: 2, nome: "Bob", email: "bob@email.com" },
];

router.get("/", (req: Request, res: Response) => {
    res.status(200).json(users);
});

export default router; // 🔥 Exportando corretamente o router
