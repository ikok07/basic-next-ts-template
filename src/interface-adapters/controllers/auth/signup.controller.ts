import {ISignUpUseCase} from "@/src/application/use-cases/auth/signup.use-case";
import {z} from "zod";
import {InputParseError} from "@/src/entities/errors/common";

const inputSchema = z.object({
    email: z.string().email({message: "Email is not valid!"}),
    password: z.string().min(6, {message: "Password is not valid!"})
})

export type ISignUpController = ReturnType<typeof signupController>

export const signupController = (
    signUpUseCase: ISignUpUseCase
) => async (
    input: Partial<z.infer<typeof inputSchema>>
) => {
    const {data, error: inputParseError} = inputSchema.safeParse(input);

    if (inputParseError) throw new InputParseError(inputParseError.message);

    return await signUpUseCase(data);
}