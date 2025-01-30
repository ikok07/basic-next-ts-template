import {IAuthenticationService} from "@/src/application/services/auth/authentication.service.interface";
import {User, Session, WeakPassword, AuthError} from "@supabase/supabase-js";
import {AuthenticationServiceOptions} from "@/src/entities/models/auth/authentication.service.options";
import {SupabaseService} from "@/src/infrastructure/services/auth/supabase-base.service";

export class AuthenticationService extends SupabaseService implements IAuthenticationService {

    async getUser(): Promise<User> {
        await this.init();
        const {data: userObj, error} = await this.client!.auth.getUser();
        if (error) throw error;
        if (!userObj) throw new AuthError("User not found!", 404, "user_not_found");
        return userObj.user;
    }

    async login({email, password}: AuthenticationServiceOptions): Promise<{ user: User; session: Session; weakPassword?: WeakPassword; }> {
        await this.init();
        const {data, error} = await this.client!.auth.signInWithPassword({email, password});
        if (error) throw error;

        return data;
    }

    async signup({email, password}: AuthenticationServiceOptions): Promise<{ user: User | null; session: Session | null; }> {
        await this.init();
        const {data, error} = await this.client!.auth.signUp({email, password});
        if (error) throw error;

        return data;
    }
}