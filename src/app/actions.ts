"use server";
import { db } from "@/db";
import { todo } from "@/db/schema";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1),
});

export type FormState = {
  message: string;
};

export const createTodoAction = async (
  previousState: FormState,
  formData: FormData
) => {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.title ?? "",
    } as FormState;
  }

  await db.insert(todo).values({
    text: validatedFields.data.title,
  });

  revalidatePath("/");
  return {
    message: "",
  } as FormState;
};

export const getAllTodos = async () => {
  return await db.select().from(todo).orderBy(todo.done);
};

export const toggleTodoAction = async (
  previousState: FormState,
  formData: FormData
) => {
  try {
    const id = parseInt(formData.get("id") as string);
    await db
      .update(todo)
      .set({
        done: not(todo.done),
      })
      .where(eq(todo.id, id));
    revalidatePath("/");
    return {
      message: "Successfully updated",
    } as FormState;
  } catch (error) {
    return {
      message: `Unexpected error ${error}`,
    } as FormState;
  }
};

export const deleteTodoAction = async (
  previousState: FormState,
  formData: FormData
) => {
  try {
    const id = parseInt(formData.get("id") as string);

    await db.delete(todo).where(eq(todo.id, id));

    revalidatePath("/");
    return {
      message: "Successfully updated",
    } as FormState;
  } catch (error) {
    return {
      message: `Unexpected error ${error}`,
    } as FormState;
  }
};
