import {createModule} from "@evyweb/ioctopus";
import {DI_SYMBOLS} from "@/di/types";
import {AuthenticationService} from "@/src/infrastructure/services/authentication.service";
import {signupUseCase} from "@/src/application/use-cases/signup.use-case";
import {signupController} from "@/src/interface-adapters/controllers/signup.controller";

export function createAuthenticationModule() {
    const authModule = createModule();

    authModule
        .bind(DI_SYMBOLS.IAuthenticationService)
        .toClass(AuthenticationService);

    authModule
        .bind(DI_SYMBOLS.ISignUpUseCase)
        .toHigherOrderFunction(signupUseCase, [DI_SYMBOLS.IAuthenticationService])

    authModule
        .bind(DI_SYMBOLS.ISignUpController)
        .toHigherOrderFunction(signupController, [DI_SYMBOLS.ISignUpUseCase])

    return authModule;
}