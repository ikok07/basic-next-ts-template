import {IAuthenticationService} from "@/src/application/services/auth/authentication.service.interface";

export type IGetUserUseCase = ReturnType<typeof getUserUseCase>;

export const getUserUseCase = (
    authenticationService: IAuthenticationService
)=> async () => {
    return await authenticationService.getUser();
}