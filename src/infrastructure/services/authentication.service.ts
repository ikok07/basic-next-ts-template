import {IAuthenticationService} from "@/src/application/services/authentication.service.interface";
import { User, Session, WeakPassword } from "@supabase/supabase-js";
import {AuthenticationServiceOptions} from "@/src/entities/models/auth/authentication.service.options";
import {SupabaseService} from "@/src/infrastructure/supabase/supabase-base.service";
import {AuthenticationError} from "@/src/entities/errors/auth/authentication";

export class AuthenticationService extends SupabaseService implements IAuthenticationService {

    async login({email, password}: AuthenticationServiceOptions): Promise<{ user: User; session: Session; weakPassword?: WeakPassword; }> {
        const {data, error} = await this.client.auth.signInWithPassword({email, password});
        if (error) throw new AuthenticationError(error.message);

        return data;
    }

    async signup({email, password}: AuthenticationServiceOptions): Promise<{ user: User | null; session: Session | null; }> {
        const {data, error} = await this.client.auth.signUp({email, password});
        if (error) throw new AuthenticationError(error.message);

        return data;
    }
}