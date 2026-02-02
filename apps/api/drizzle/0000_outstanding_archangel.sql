CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"is_completed" boolean DEFAULT false,
	"priority" text DEFAULT 'medium',
	"created_at" timestamp DEFAULT now()
);
