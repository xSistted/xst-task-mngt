import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const tasks = pgTable('tasks', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  isCompleted: boolean('is_completed').default(false),
  priority: text('priority').default('medium'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const users = pgTable('users', {
  studentID: text('student_id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  picture: text('picture'),
  createdAt: timestamp('created_at').defaultNow(),
});