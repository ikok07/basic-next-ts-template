import {Session, User, WeakPassword} from "@supabase/auth-js";
import {AuthenticationServiceOptions} from "@/src/entities/models/auth/authentication.service.options";

export interface IAuthenticationService {
    getUser(): Promise<User>;
    login(opts: AuthenticationServiceOptions): Promise<{ user: User, session: Session, weakPassword?: WeakPassword}>;
    signup(opts: AuthenticationServiceOptions): Promise<{ user: User | null, session: Session | null}>;
}