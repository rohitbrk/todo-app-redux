import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "./features/todo/todoSlice.js";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [editTodoFlag, setEditTodoFlag] = useState("");

  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (editTodoFlag) {
      dispatch(editTodo({ id: editTodoFlag, title, desc, completed: false }));
      setEditTodoFlag("");
    } else {
      dispatch(addTodo({ title, desc, completed: false }));
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
      <TodoList
        setTitle={setTitle}
        setDesc={setDesc}
        setEditTodoFlag={setEditTodoFlag}
      />
    </div>
  );
};

export default App;
