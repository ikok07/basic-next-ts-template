"use server"

import {createClient} from "@/utils/supabase/server";
import {z} from "zod";

type AuthData = {
    email: string,
    password: string
}

const authDataSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export async function signUp(signUpData: AuthData) {
    const supabase = await createClient();
    const {email, password} = authDataSchema.parse(signUpData);
    const {data, error} = await supabase.auth.signUp({email, password});
    if (error) throw error;

    return data;
}

export async function login(loginData: AuthData) {
    const supabase = await createClient();
    const {email, password} = authDataSchema.parse(loginData);
    const {data, error} = await supabase.auth.signInWithPassword({email, password});
    if (error) throw error;

    return data;
}