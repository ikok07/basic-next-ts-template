import {IAuthenticationService} from "@/src/application/services/auth/authentication.service.interface";
import {AuthenticationServiceOptions} from "@/src/entities/models/auth/authentication.service.options";

export type ILoginUseCase = ReturnType<typeof loginUseCase>;

export const loginUseCase = (
    authenticationService: IAuthenticationService
)=> async (
    opts: AuthenticationServiceOptions
) => {
    return await authenticationService.login(opts);
}