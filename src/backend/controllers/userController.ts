// src/controllers/userController.ts
import { Request, Response } from "express";
import { UserService } from "../services/userService";

export class UserController {
    // Método para criar um novo usuário
    static async createUser(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;

        // Chama o serviço para criar o usuário
        const user = await UserService.createUser(name, email, password);
        res.status(201).json(user);
    }

    // Método para listar todos os usuários
    static async getAllUsers(req: Request, res: Response): Promise<void> {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    }
}
