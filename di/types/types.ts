import {AUTH_RETURN_TYPES, AUTH_SYMBOLS} from "@/di/types/authentication.types";
import {EMAIL_RETURN_TYPES, EMAIL_SYMBOLS} from "@/di/types/email.types";
import {AUTHORIZATION_RETURN_TYPES, AUTHORIZATION_SYMBOLS} from "@/di/types/authorization.types";

export const DI_SYMBOLS = {
    ...AUTH_SYMBOLS,
    ...AUTHORIZATION_SYMBOLS,
    ...EMAIL_SYMBOLS
};

export interface DI_RETURN_TYPES extends
    AUTH_RETURN_TYPES,
    AUTHORIZATION_RETURN_TYPES,
    EMAIL_RETURN_TYPES
{}