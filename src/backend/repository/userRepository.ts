// src/repository/userRepository.ts
import { UserModel } from "../models/userModels";
import { UserEntity } from "../entity/userEntity";

export class UserRepository {
    // Método para criar um novo usuário no banco de dados
    static async createUser(userEntity: UserEntity): Promise<UserEntity> {
        // Executa o insert no banco de dados (com base no modelo)
        const result = await UserModel.createUser(
            userEntity.name,
            userEntity.email,
            userEntity.password
        );

        // Retorna a entidade com os dados retornados, como o ID gerado e as datas
        return new UserEntity(
            result.insertId, // ID gerado pelo banco
            userEntity.name, // Nome do usuário
            userEntity.email, // Email do usuário
            userEntity.password, // Senha do usuário
            new Date() // CreatedAt (data atual)
        );
    }

    // Método para encontrar todos os usuários no banco de dados
    static async findAll(): Promise<UserEntity[]> {
        const users = await UserModel.findAll();

        // Mapeia as linhas retornadas para instâncias de UserEntity
        return users.map(
            (row) =>
                new UserEntity(
                    row.id, // ID do usuário
                    row.nome, // Nome do usuário
                    row.email, // Email do usuário
                    row.password, // Senha do usuário
                    row.created_at // CreatedAt (data de criação)
                )
        );
    }
}
