import {AuthError, SupabaseClient} from "@supabase/supabase-js";
import {createClient} from "@/src/infrastructure/services/auth/supabase_client.service";

export abstract class SupabaseService {
    protected client?: SupabaseClient;

    public async init(): Promise<void> {
        try {
            this.client = await createClient();
        } catch (e) {
            throw new AuthError(`Client not created! Error: ${(e as Error).message}`)
        }
    }
}