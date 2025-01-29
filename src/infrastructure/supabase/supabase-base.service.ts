import {cookies} from "next/headers";
import {createServerClient} from "@supabase/ssr";
import {CookieOptions} from "@supabase/ssr/src/types";
import {SupabaseClient} from "@supabase/supabase-js";

export abstract class SupabaseService {
    protected client: SupabaseClient;

    constructor() {
        const cookieStore = cookies();

        this.client = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL as string,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
            {
                cookies: {
                    getAll() {
                        return cookieStore.getAll()
                    },
                    setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
                        try {
                            cookiesToSet.forEach(({name, value, options}) => {
                                cookieStore.set(name, value, options);
                            })
                        } catch(e) {}
                    }
                }
            }
        )
    }
}