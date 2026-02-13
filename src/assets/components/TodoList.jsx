import { useState, useEffect } from "react";

function TodoList() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: text,
      },
    ]);

    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const resetTasks = () => {
    setTasks([]);
  };

  return (
    <div className="bg-white dark:bg-zinc-800 w-100 rounded-2xl shadow-md p-6 transition text-gray-800 dark:text-gray-100">
      <h2 className="font-semibold mb-4">My Tasks</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Tulis tugas baru..."
          className="flex-1 border dark:border-zinc-600 bg-transparent rounded-lg px-3 py-2
          text-gray-900 dark:text-white
          placeholder-gray-400 dark:placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 active:scale-95 transition text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>

        {tasks.length > 0 && (
          <button
            onClick={resetTasks}
            className="bg-red-500 hover:bg-red-600 active:scale-95 transition text-white px-4 py-2 rounded-lg"
          >
            Reset
          </button>
        )}
      </div>

      <ul className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
        {tasks.length === 0 && (
          <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-10">
            Belum ada tugas...
          </p>
        )}

        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 dark:bg-zinc-700 px-3 py-2 rounded-lg"
          >
            <span className="break-all max-w-[70%]">
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-600 font-medium text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
