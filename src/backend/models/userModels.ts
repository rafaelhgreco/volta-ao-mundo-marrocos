// src/models/userModel.ts
import { Database } from "../../config/database";

export class UserModel {
    private static db = Database.getInstance();

    // Método para encontrar todos os usuários
    static async findAll(): Promise<any[]> {
        const [rows] = await UserModel.db.execute("SELECT * FROM users");
        return rows as any[]; // Tipando o retorno como um array
    }

    // Método para verificar se o email já existe
    static async emailExistsById(email: string): Promise<boolean> {
        const [rows] = await UserModel.db.execute(
            "SELECT 1 FROM users WHERE email = ? LIMIT 1",
            [email]
        );

        return (rows as any[]).length > 0; // Verificando o comprimento dos resultados
    }

    // Método para criar um novo usuário
    static async createUser(
        name: string,
        email: string,
        password: string
    ): Promise<any> {
        const [result] = await UserModel.db.execute(
            "INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, NOW())",
            [name, email, password]
        );
        return result; // Retorno do OkPacket, sem necessidade de manipular comprimento
    }
}
