import { getAllTodos } from "@/app/actions";
import React from "react";
import Todo from "./todo";

export default async function Todos() {
  const todos = await getAllTodos();

  return (
    <div className="px-5 py-4">
      <div className="max-w-4xl mx-auto">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
