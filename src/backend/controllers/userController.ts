// src/controllers/userController.ts
import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { UserDto } from "../dtos/userDto";

export class UserController {
    // Método para criar um novo usuário
    static async createUser(req: Request, res: Response): Promise<void> {
        const userDto: UserDto = req.body;

        // Chama o serviço para criar o usuário
        const user = await UserService.createUser(userDto);

        // Responde com o DTO do novo usuário
        res.status(201).json(user);
    }

    // Método para listar todos os usuários
    static async getAllUsers(req: Request, res: Response): Promise<void> {
        const users = await UserService.getAllUsers();
        res.status(200).json(users); // Retorna a lista de usuários no formato DTO
    }
}
