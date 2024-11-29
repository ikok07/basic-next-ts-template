"use server"

import {cookies} from "next/headers";
import {createServerClient} from "@supabase/ssr";
import {CookieOptions} from "@supabase/ssr/src/types";

export async function createClient() {
    const cookieStore = cookies();

    return createServerClient(
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