import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

let db: ReturnType<typeof drizzle>;

try {
    const client = postgres(process.env.DATABASE_URL!);
    console.log('Database connection successful');
    db = drizzle(client, { schema });
} catch (error) {
    console.error('Database connection error:', error);
    throw error;
}

export { db };