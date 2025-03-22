// src/services/userService.ts
import { UserRepository } from "../repository/userRepository";
import { UserMapper } from "../mapper/userMapper";
import { UserDto } from "../dtos/userDto";

export class UserService {
    // Método para criar um novo usuário
    static async createUser(userDto: UserDto): Promise<UserDto> {
        // Converte o DTO para a entidade
        const userEntity = UserMapper.toEntity(userDto);

        // Chama o repositório para salvar no banco de dados
        const result = await UserRepository.createUser(userEntity);

        // Converte a entidade de volta para o DTO e retorna
        return UserMapper.toDto(result);
    }

    // Método para listar todos os usuários
    static async getAllUsers(): Promise<UserDto[]> {
        const users = await UserRepository.findAll();
        return users.map((user) => UserMapper.toDto(user)); // Converte todas as entidades para DTOs
    }
}
