import { users } from "../../db/schema";
import { db } from "../../db";
import Elysia from "elysia";

const LoginModule = new Elysia({prefix: '/login', tags: ['login']})
    .get('/healthCheck', () => {
        return { status: "ok", message: "Login module is healthy" };
    })
    
export { LoginModule };



