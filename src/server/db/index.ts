import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const queryClient = postgres(process.env.POSTGRES_URL!, {
  ssl: "require",
});

export const db = drizzle(queryClient, { schema });
