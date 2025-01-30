"use server"

import {createServerAction} from "@/app/_utils/createServerAction";
import {User} from "@supabase/auth-js";
import {getInjection} from "@/di/container";

export const getUser = createServerAction<User>(async () => {
    const getUserController = getInjection("IGetUserController");
    return await getUserController();
})