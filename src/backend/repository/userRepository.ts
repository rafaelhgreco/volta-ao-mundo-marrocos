import { UserEntity } from "../entity/userEntity";
import { UserDto } from "../dtos/userDto";
import { UserModel } from "../models/userModels";

export class UserRepository {
    // Busca todos os usuários
    static async findAll(): Promise<UserEntity[]> {
        return await UserModel.findAll();
    }

    // Verifica se o email já existe
    static async emailExists(email: string, id?: number): Promise<boolean> {
        return await UserModel.emailExistsById(email, id);
    }

    // Cria um novo usuário no banco
    static async create(userDto: UserDto): Promise<UserEntity> {
        return await UserModel.createUser(
            userDto.name,
            userDto.email,
            userDto.password
        );
    }
}
