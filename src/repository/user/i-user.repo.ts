import { UserDomain } from "src/domain/user.domain";

export interface IUserRepo {
    get(): Promise<UserDomain[]>;
}
