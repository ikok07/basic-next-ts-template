import {IAuthenticationService} from "@/src/application/services/auth/authentication.service.interface";
import {AuthenticationServiceOptions} from "@/src/entities/models/auth/authentication.service.options";

export type ISignUpUseCase = ReturnType<typeof signupUseCase>;

export const signupUseCase = (
    authenticationService: IAuthenticationService
) => async (
    opts: AuthenticationServiceOptions
) => {
    return authenticationService.signup(opts);
}