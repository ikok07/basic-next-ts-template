import {IAuthenticationService} from "@/src/application/services/auth/authentication.service.interface";
import {AuthenticationServiceOptions} from "@/src/entities/models/auth/authentication.service.options";
import {User} from "@clerk/backend";
import {auth, currentUser} from "@clerk/nextjs/server";
import {AuthenticationError} from "@/src/entities/errors/auth/authentication";

export class ClerkService implements IAuthenticationService {
    async getUser(): Promise<User | null> {
        try {
            const {userId} = await auth();

            if (!userId) return null;

            return await currentUser();
        } catch(e) {

            throw new AuthenticationError(`Failed to get user! ${e}`);
        }
    }
}