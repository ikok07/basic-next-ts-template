import {ILoginUseCase} from "@/src/application/use-cases/auth/login.use-case";
import {AuthenticationServiceOptions} from "@/src/entities/models/auth/authentication.service.options";
import {z} from "zod";
import {InputParseError} from "@/src/entities/errors/common";

const inputSchema = z.object({
    email: z.string().email({message: "Email is not valid!"}),
    password: z.string().min(6, {message: "Password is not valid!"})
})

export type ILoginController = ReturnType<typeof loginController>;

export const loginController = (
    loginUseCase: ILoginUseCase
)=> async (
    input: Partial<z.infer<typeof inputSchema>>
)=> {
    const {data, error: inputParseError} = inputSchema.safeParse(input);

    if (inputParseError) throw new InputParseError(inputParseError.message);

    await loginUseCase(data);
}