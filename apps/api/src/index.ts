import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { openapi } from "@elysiajs/openapi";
import { TaskModule, LoginModule } from "./modules/service";

const app = new Elysia()
  .use(cors({
    origin: true,
    credentials: true
  }))
  .use(openapi({
    path:"/docs"
  }))
  .get("/", () => "Hello from Elysia Backend!")
  .use(LoginModule)
  .use(TaskModule)

  .listen(3000);

// Export the type of the app for Eden Treaty
export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);