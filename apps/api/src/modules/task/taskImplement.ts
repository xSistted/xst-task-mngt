import { Elysia, t } from "elysia";
import { db } from "../../db";
import { tasks } from "../../db/schema";

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

export { TaskModule };