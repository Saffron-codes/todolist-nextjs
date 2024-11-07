import React, { useActionState } from "react";
import { toggleTodoAction } from "./actions";
import { CheckSquareIcon, Loader, SquareIcon } from "lucide-react";
import { todoType } from "@/types/todoType";

const initialState = {
  message: "",
};

export const ToggleTodoForm = ({ todo }: { todo: todoType }) => {
  //TODO: handle state
  const [state, formAction, isPending] = useActionState(
    toggleTodoAction,
    initialState
  );
  return (
    <form action={formAction}>
      <input type="hidden" name="id" value={todo.id} />
      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="flex items-center">
          {todo.done ? (
            <CheckSquareIcon className="w-5 h-5 text-green-600" />
          ) : (
            <SquareIcon className="w-5 h-5 text-gray-600" />
          )}
        </button>
      )}
    </form>
  );
};
