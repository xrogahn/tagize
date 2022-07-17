import { Inject, Injectable } from "@nestjs/common";
import { UserDomain } from "src/domain/user.domain";
import { IUserRepo } from "src/repository/user/i-user.repo";
import { UserPostgresRepo } from "src/repository/user/user-postgres.repo";

@Injectable()
export class GetUserUsecase {
    constructor(@Inject(UserPostgresRepo) private readonly userRepo: IUserRepo) {}

    async execute(): Promise<UserDomain[]> {
        return this.userRepo.get();
    }
}
