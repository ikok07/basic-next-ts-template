"use server"

import {createServerAction, ServerActionError} from "@/app/_utils/createServerAction";
import {getInjection} from "@/di/container";
import {signupController} from "@/src/interface-adapters/controllers/auth/signup.controller";
import {User} from "@supabase/auth-js";
import {revalidatePath} from "next/cache";
import {AuthError} from "@supabase/supabase-js";

export type AuthInput = {
    email: string,
    password: string
}

export const signUp = createServerAction<void, [AuthInput]>(async (input: AuthInput) => {
    try {
        const signUpController = getInjection("ISignUpController");
        await signUpController(input);
    } catch (e) {
        if (e instanceof AuthError) {
            switch (e.code) {
                case "user_already_exists":
                    throw new ServerActionError({
                        id: "user_already_exists",
                        message: "Вече съществува потребител с този имейл адрес"
                    })
            }
        }
    }
})

export const login = createServerAction<void, [AuthInput]>(async (input: AuthInput) => {
    try {
        const loginController = getInjection("ILoginController");
        await loginController(input)
    } catch (e) {
        if (e instanceof AuthError) {
            switch (e.code) {
                case "email_not_confirmed":
                    throw new ServerActionError({
                        id: "email_not_confirmed",
                        message: "Имейлът не е потвърден!"
                    })
                case "invalid_credentials":
                    throw new ServerActionError({
                        id: "invalid_credentials",
                        message: "Грешен имейл или парола!"
                    })
            }
        }
    }
})