import { UserEntity } from "../entity/userEntity";
import { UserDto } from "../dtos/userDto";

export class UserMapper {
    static toEntity(dto: UserDto): UserEntity {
        // Adicionando os campos necessários no construtor da UserEntity
        return new UserEntity(
            0, // ID (o banco vai gerar)
            dto.name, // Nome
            dto.email, // Email
            dto.password, // Senha
            new Date() // CreatedAt (data atual)
        );
    }

    static toDto(entity: UserEntity): UserDto {
        return {
            name: entity.name,
            email: entity.email,
            password: entity.password,
        };
    }
}
