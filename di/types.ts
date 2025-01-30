import {IAuthenticationService} from "@/src/application/services/auth/authentication.service.interface";
import {ISignUpUseCase} from "@/src/application/use-cases/auth/signup.use-case";
import {ISignUpController} from "@/src/interface-adapters/controllers/auth/signup.controller";
import {ILoginController} from "@/src/interface-adapters/controllers/auth/login.controller";
import {ILoginUseCase} from "@/src/application/use-cases/auth/login.use-case";
import {IGetUserUseCase} from "@/src/application/use-cases/auth/get-user.use-case";
import {IGetUserController} from "@/src/interface-adapters/controllers/auth/get-user.controller";

export const DI_SYMBOLS = {
    // Services
    IAuthenticationService: Symbol.for("IAuthenticationService"),

    // Use Cases
    IGetUserUseCase: Symbol.for("IGetUserUseCase"),
    ISignUpUseCase: Symbol.for("ISignUpUseCase"),
    ILoginUseCase: Symbol.for("ILoginUseCase"),

    // Controllers
    IGetUserController: Symbol.for("IGetUserController"),
    ISignUpController: Symbol.for("ISignUpController"),
    ILoginController: Symbol.for("ILoginController")
}

export interface DI_RETURN_TYPES {
    // Services
    IAuthenticationService: IAuthenticationService,

    // Use Cases
    IGetUserUseCae: IGetUserUseCase,
    ISignUpUseCase: ISignUpUseCase,
    ILoginUseCase: ILoginUseCase

    // Controllers
    IGetUserController: IGetUserController,
    ISignUpController: ISignUpController,
    ILoginController: ILoginController
}