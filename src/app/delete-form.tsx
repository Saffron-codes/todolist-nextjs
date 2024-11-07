"use client";
import React, { useActionState } from "react";
import { deleteTodoAction } from "./actions";
import { todoType } from "@/types/todoType";

const initialState = {
  message: "",
};

export const DeleteForm = ({ todo }: { todo: todoType }) => {
  const [state, formAction, isPending] = useActionState(
    deleteTodoAction,
    initialState
  );
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={todo.id} />
      <button
        disabled={isPending}
        className={`text-red-600 hover:text-red-800 focus:outline-none ${
          isPending ? "cursor-not-allowed text-gray-400" : ""
        }`}
      >
        Delete
      </button>
    </form>
  );
};
