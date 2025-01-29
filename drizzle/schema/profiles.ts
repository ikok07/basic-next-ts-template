import {pgTable, serial, text} from "drizzle-orm/pg-core";

export const profilesTable = pgTable("profiles", {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
})

export type SelectProfile = typeof profilesTable.$inferSelect;
export type InsertProfile = typeof profilesTable.$inferInsert;