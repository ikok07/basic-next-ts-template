import {createModule} from "@evyweb/ioctopus";
import {DI_SYMBOLS} from "@/di/types";
import {AuthenticationService} from "@/src/infrastructure/services/auth/authentication.service";
import {signupUseCase} from "@/src/application/use-cases/auth/signup.use-case";
import {signupController} from "@/src/interface-adapters/controllers/auth/signup.controller";
import {loginUseCase} from "@/src/application/use-cases/auth/login.use-case";
import {loginController} from "@/src/interface-adapters/controllers/auth/login.controller";
import {getUserUseCase} from "@/src/application/use-cases/auth/get-user.use-case";
import {getUserController, IGetUserController} from "@/src/interface-adapters/controllers/auth/get-user.controller";

export function createAuthenticationModule() {
    const authModule = createModule();

    authModule
        .bind(DI_SYMBOLS.IAuthenticationService)
        .toClass(AuthenticationService);

    authModule
        .bind(DI_SYMBOLS.IGetUserUseCase)
        .toHigherOrderFunction(getUserUseCase, [DI_SYMBOLS.IAuthenticationService]);

    authModule
        .bind(DI_SYMBOLS.IGetUserController)
        .toHigherOrderFunction(getUserController, [DI_SYMBOLS.IGetUserUseCase]);

    authModule
        .bind(DI_SYMBOLS.ISignUpUseCase)
        .toHigherOrderFunction(signupUseCase, [DI_SYMBOLS.IAuthenticationService]);

    authModule
        .bind(DI_SYMBOLS.ISignUpController)
        .toHigherOrderFunction(signupController, [DI_SYMBOLS.ISignUpUseCase]);

    authModule
        .bind(DI_SYMBOLS.ILoginUseCase)
        .toHigherOrderFunction(loginUseCase, [DI_SYMBOLS.IAuthenticationService]);

    authModule
        .bind(DI_SYMBOLS.ILoginController)
        .toHigherOrderFunction(loginController, [DI_SYMBOLS.ILoginUseCase]);

    return authModule;
}