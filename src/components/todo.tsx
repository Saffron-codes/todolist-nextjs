"use client";
import { DeleteForm } from "@/app/delete-form";
import { ToggleTodoForm } from "@/app/toggle-todo-form";
import { todoType } from "@/types/todoType";
import React from "react";

interface TodoProps {
  todo: todoType;
}

export default function Todo({ todo }: TodoProps) {

  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center space-x-2">
        <ToggleTodoForm
          todo={todo}
        />
        <span
          className={`text-lg ${
            todo.done ? "line-through text-gray-500" : "text-gray-400"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <DeleteForm todo={todo}/>
    </div>
  );
}
