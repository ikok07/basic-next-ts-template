import {User} from "@clerk/backend";

export interface IAuthenticationService {
    getUser(): Promise<User | null>;
}