import {IAuthenticationService} from "@/src/application/services/authentication.service.interface";
import {ISignUpUseCase} from "@/src/application/use-cases/signup.use-case";
import {ISignUpController} from "@/src/interface-adapters/controllers/signup.controller";

export const DI_SYMBOLS = {
    // Services
    IAuthenticationService: Symbol.for("IAuthenticationService"),

    // Use Cases
    ISignUpUseCase: Symbol.for("ISignUpUseCase"),

    // Controllers
    ISignUpController: Symbol.for("ISignUpController")
}

export interface DI_RETURN_TYPES {
    // Services
    IAuthenticationService: IAuthenticationService,

    // Use Cases
    ISignUpUseCase: ISignUpUseCase,

    // Controllers
    ISignUpController: ISignUpController
}