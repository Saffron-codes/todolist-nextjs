"use client";
import { createTodoAction } from "./actions";
import { useActionState } from "react";

const initialState = {
  message: "",
};
export default function AddTodoFom() {
  const [state, formAction, isPending] = useActionState(
    createTodoAction,
    initialState
  );

  return (
    <form
      className="flex flex-col items-center space-y-3 p-4 w-full md:w-1/3 mx-auto"
      action={formAction}
    >
      <div className="w-full">
        <input
          type="text"
          name="title"
          placeholder="Add a new task..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:border-gray-500"
        />
        {state.message && (
          <p className="mt-1 text-sm text-red-500">{state.message}</p>
        )}
      </div>

      <input
        type="submit"
        value="Add"
        disabled={isPending}
        className="w-full md:w-auto bg-[var(--foreground)] text-[var(--background)] font-medium px-4 py-2 rounded-md 
                   hover:bg-gray-700 active:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
      />
    </form>
  );
}
