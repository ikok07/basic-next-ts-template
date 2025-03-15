import * as todoes from "@/drizzle/schema/todo"

import {IAuthenticationService} from "@/src/application/services/auth/authentication.service.interface";
import {DatabaseError} from "@/src/entities/errors/db/database";
import {drizzle, NeonHttpDatabase} from "drizzle-orm/neon-http";
import {neon, NeonQueryFunction} from "@neondatabase/serverless";
import {User} from "@clerk/backend";

export class BaseRepository {
    authService: IAuthenticationService

    schema = {
        ...todoes
    };
    constructor(authenticationService: IAuthenticationService) {
        this.authService = authenticationService;

    }

    protected async queryDB<T>(callback: (db: Omit<
        NeonHttpDatabase<typeof this.schema> & { $client: NeonQueryFunction<false, false> },
        "_" | "transaction" | "$withAuth" | "batch" | "$with" | "$client"
    >, user: User) => Promise<T>) {
        const {user, auth} = await this.authService.getUser();

        const token = await auth.getToken();
        if (!token) throw new DatabaseError("No authentication token found!");

        if (!auth.userId || !user) throw new DatabaseError("No user found!");

        const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!, {
            authToken: token
        });

        const db = drizzle({
            client: sql,
            schema: this.schema
        })

        return callback(db, user);
    };
}