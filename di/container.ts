import {createContainer} from "@evyweb/ioctopus";
import {DI_RETURN_TYPES, DI_SYMBOLS} from "@/di/types/types";
import {createAuthenticationModule} from "@/di/modules/authentication.module";
import {createEmailsModule} from "@/di/modules/emails.module";
import {createAuthorizationModule} from "@/di/modules/authorization.module";

const ApplicationContainer = createContainer();

ApplicationContainer.load(Symbol("AuthenticationModule"), createAuthenticationModule());
ApplicationContainer.load(Symbol("AuthorizationModule"), createAuthorizationModule());
ApplicationContainer.load(Symbol("EmailModule"), createEmailsModule());

export function getInjection<K extends keyof typeof DI_SYMBOLS>(symbol: K): DI_RETURN_TYPES[K] {
    return ApplicationContainer.get(DI_SYMBOLS[symbol]);
}