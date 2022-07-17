import { Inject } from "@nestjs/common";
import { IUserDAO } from "src/dao/user/i-user.dao";
import { UserPrismaDAO } from "src/dao/user/user-prisma.dao";
import { UserDomain } from "src/domain/user.domain";
import { IUserRepo } from "./i-user.repo";

export class UserPostgresRepo implements IUserRepo {
    constructor(@Inject(UserPrismaDAO) private readonly userDAO: IUserDAO) {}

    async get(): Promise<UserDomain[]> {
        const users = await this.userDAO.fetch();
        if (users.length === 0) return [];
        return users;
    }
}
