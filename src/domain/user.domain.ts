import { User } from '@prisma/client';
import { IsBoolean, IsNotEmpty, IsNumber, IsString} from 'class-validator';
import { CreateUserDTO } from 'src/dto/user/create-user.dto';

export interface UserProps {
    readonly id?: number;
    name?: string;
    email: string;
    password: string;
    isActive: boolean;
}

export class UserDomain implements UserProps {
    @IsNumber()
    readonly id?: number;

    @IsString()
    name?: string;

    @IsString()
    @IsNotEmpty()
    email: string

    password: string

    @IsBoolean()
    @IsNotEmpty()
    isActive: boolean

    private constructor(props: UserProps) {
        Object.assign(this, props);
    }

    static create(raw: CreateUserDTO): UserDomain {
        return new UserDomain(raw);
    }

    static reconstruct(dbModel: User): UserDomain {
        return new UserDomain(dbModel);
    }
}
