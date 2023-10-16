import AddTodo from "./components/AddTodo";

import TodoList from "./components/TodoList.js";

const App = () => {
  return (
    <div className="min-h-screen bg-stone-900">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
