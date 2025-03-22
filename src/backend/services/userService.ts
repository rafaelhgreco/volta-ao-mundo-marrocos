// src/services/userService.ts
import { UserModel } from "../models/userModels";

export class UserService {
    // Método para criar um novo usuário
    static async createUser(name: string, email: string, password: string) {
        // Verifica se o email já existe
        const emailExists = await UserModel.emailExistsById(email);
        if (emailExists) {
            throw new Error("Email já está em uso");
        }

        // Cria o usuário
        const result = await UserModel.createUser(name, email, password);
        return result;
    }

    // Método para listar todos os usuários
    static async getAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }
}
