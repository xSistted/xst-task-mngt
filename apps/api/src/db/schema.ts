import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const tasks = pgTable('tasks', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  isCompleted: boolean('is_completed').default(false),
  priority: text('priority').default('medium'),
  createdAt: timestamp('created_at').defaultNow(),
});