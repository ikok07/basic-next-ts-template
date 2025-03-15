"use server"

import {getInjection} from "@/di/container";
import {CheckUserAccessOptions} from "@/src/application/services/auth/authorization.service.interface";
import {createServerAction} from "@/app/_utils/createServerAction";
import {TodoInsert} from "@/drizzle/schema/todo";

export const checkAccess = createServerAction((async (opts: Partial<CheckUserAccessOptions>) => {
    try {
        const checkAccessController = getInjection("ICheckAccessController");
        return await checkAccessController(opts);
    } catch(e) {
        return false;
    }
}));

export const getTodos = createServerAction(async () => {
    const getTodosController = getInjection("IGetTodosController");
    return await getTodosController();
})

export const createTodo = createServerAction(async (todo: Partial<TodoInsert>) => {
    throw new Error("TEST");
    const createTodoController = getInjection("ICreateTodoController");
    return await createTodoController(todo);
})