import { useSelector } from "react-redux";
import Todo from "./Todo";

type TodoListProps = {
  setTitle: (title: string) => void;
  setDesc: (desc: string) => void;
  setEditTodoFlag: (editTodoFlag: string) => void;
  setCompleted: (completed: boolean) => void;
};

const TodoList = ({
  setTitle,
  setDesc,
  setEditTodoFlag,
  setCompleted,
}: TodoListProps) => {
  const todos: Array<{
    id: string;
    title: string;
    desc: string;
    completed: boolean;
  }> = useSelector((state) => state.todos);
  return (
    <div className="mt-2 flex justify-center text-center">
      <div className="w-[28rem] px-4 pt-4 pb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ToDos
        </h5>
        {todos.map((todo) => (
          <Todo
            setTitle={setTitle}
            setDesc={setDesc}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            desc={todo.desc}
            completed={todo.completed}
            setEditTodoFlag={setEditTodoFlag}
            setCompleted={setCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
