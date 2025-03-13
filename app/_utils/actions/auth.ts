"use server"

import {createServerAction} from "@/app/_utils/createServerAction";
import {getInjection} from "@/di/container";
import {User} from "@clerk/backend";

export const getUser = createServerAction<User>(async () => {
    const getUserController = getInjection("IGetUserController");
    return await getUserController();
})