import { Inject } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/infrastructure/prisma.infra";
import { IUserDAO } from "./i-user.dao";

export class UserPrismaDAO implements IUserDAO {
    constructor(@Inject(PrismaService) private daoService: PrismaService) {}

    async fetch(): Promise<User[]> {
        return this.daoService.user.findMany();
    }
}
