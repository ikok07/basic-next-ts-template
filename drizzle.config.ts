import { config } from "dotenv"
import {defineConfig} from "drizzle-kit";

config({ path: ".env.local" })

export default defineConfig({
    schema: "./drizzle/schema",
    out: "./supabase/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.SUPABASE_DB_URL!
    }
});