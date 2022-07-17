import { Module } from '@nestjs/common';
import { UserController } from 'src/controller/user/user.controller';
import { UserPrismaDAO } from 'src/dao/user/user-prisma.dao';
import { PrismaService } from 'src/infrastructure/prisma.infra';
import { UserPostgresRepo } from 'src/repository/user/user-postgres.repo';
import { CreateUserUsecase } from 'src/usecase/user/create-user.usecase';
import { GetUserUsecase } from 'src/usecase/user/get-user.usecase';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        CreateUserUsecase,
        GetUserUsecase,
        UserPostgresRepo,
        UserPrismaDAO,
        PrismaService,
    ],
})
export class UserModule {}
