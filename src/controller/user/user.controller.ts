import { Controller, Get } from '@nestjs/common';
import { GetUserUsecase } from 'src/usecase/user/get-user.usecase';

export enum UserEndpoint {
    GetUsers = 'users',
    CreateUser = 'users',
}

@Controller()
export class UserController {
    constructor(
        private readonly getUserUsecase: GetUserUsecase,
    ) {}

    @Get(UserEndpoint.GetUsers)
    async getHello() {
        const users = await this.getUserUsecase.execute();
        return JSON.stringify(users);
    }
}
