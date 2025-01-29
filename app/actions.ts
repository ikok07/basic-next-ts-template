"use server"

import {createServerAction} from "@/app/_utils/createServerAction";
import {getInjection} from "@/di/container";

export type AuthInput = {
    email: string,
    password: string
}

export const signUp = createServerAction<void, [AuthInput]>(async ({email, password}: AuthInput) => {
    const signUpController = getInjection("ISignUpController");
    await signUpController({email, password});
})