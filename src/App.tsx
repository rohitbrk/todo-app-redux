import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "./features/todo/todoSlice.js";
import { useSelector } from "react-redux";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [completed, setCompleted] = useState(false);
  const [editTodoFlag, setEditTodoFlag] = useState("");

  const todos: Array<{
    id: string;
    title: string;
    desc: string;
    completed: boolean;
  }> = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (!title) {
      window.alert("Please Enter Title");
      return;
    }
    if (editTodoFlag) {
      dispatch(editTodo({ id: editTodoFlag, title, desc, completed: false }));
      setEditTodoFlag("");
    } else {
      dispatch(addTodo({ title, desc, completed }));
    }
    setTitle("");
    setDesc("");
  };
  return (
    <div className="min-h-screen bg-stone-900">
      <AddTodo
        title={title}
        desc={desc}
        setTitle={setTitle}
        setDesc={setDesc}
        handleAddTodo={handleAddTodo}
      />
      {todos[0] ? (
        <TodoList
          setTitle={setTitle}
          setDesc={setDesc}
          setEditTodoFlag={setEditTodoFlag}
          setCompleted={setCompleted}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
