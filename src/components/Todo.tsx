type TodoProps = {
  title: string;
  desc: string;
  completed: boolean;
};
const Todo = ({ title, desc, completed }: TodoProps) => {
  return (
    <div className="flex justify-evenly">
      <input type="checkbox" checked={completed} />
      <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {title}
      </span>
      <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {desc}
      </span>
    </div>
  );
};

export default Todo;
