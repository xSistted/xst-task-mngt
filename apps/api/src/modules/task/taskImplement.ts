import { Elysia, t } from "elysia";
import { db } from "../../db";
import { tasks } from "../../db/schema";
import { eq } from "drizzle-orm";

const TaskModule = new Elysia({prefix: '/tasks', tags: ['tasks']})
    .get('/', async() => {
        return await db.select().from(tasks);
    })

    .post('/create', async({ body }) => {
        const newTask = await db.insert(tasks).values(body).returning();
        return newTask[0]
    }, {
        body: t.Object({
            title: t.String(),
            isCompleted: t.Boolean({ default: false }),
            priority: t.String({ default: "medium" })
        })
    })
    .delete('/delete/:id', async({ params }) => {
        const deletedTask = await db.delete(tasks).where(eq(tasks.id, params.id)).returning();
        if (deletedTask == null) {
            return { message: "Task not found" };
        }
        return { message: "Task deleted successfully" };
    })

export { TaskModule };