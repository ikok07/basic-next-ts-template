import {NextRequest, NextResponse} from "next/server";
import {createServerClient} from "@supabase/ssr";
import {CookieOptions} from "@supabase/ssr/src/types";

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL as string,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
                    cookiesToSet.forEach(({name, value}) => {
                        request.cookies.set(name, value);
                    });
                    supabaseResponse = NextResponse.next({
                        request
                    });
                    cookiesToSet.forEach(({name, value, options}) => {
                        supabaseResponse.cookies.set(name, value, options)
                    })
                }
            }
        }
    );

    const {data: {user}} = await supabase.auth.getUser();

    // Logic if there isn't user logged in
    // use request.nextUrl.pathname in order to check the url
    if (!user) {
        //...
    }

    return supabaseResponse;
}