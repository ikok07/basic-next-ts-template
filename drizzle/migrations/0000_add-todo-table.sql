CREATE TABLE "todoes" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "todoes" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE POLICY "allow_authenticated_users_to_select" ON "todoes" AS PERMISSIVE FOR SELECT TO "authenticated" USING (auth.user_id() = user_id);--> statement-breakpoint
CREATE POLICY "allow_authenticated_users_to_insert" ON "todoes" AS PERMISSIVE FOR INSERT TO "authenticated" WITH CHECK (true);