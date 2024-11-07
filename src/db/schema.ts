import {  text, boolean, pgTable, serial } from "drizzle-orm/pg-core";

export const todo = pgTable("example_proj_todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
