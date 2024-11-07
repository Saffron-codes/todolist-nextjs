import Todos from "@/components/todos";
import AddTodoFom from "./add-todo-form";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <AddTodoFom/>
      <Todos/>
    </div>
  );
}
