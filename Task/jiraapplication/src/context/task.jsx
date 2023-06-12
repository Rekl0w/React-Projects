import { createContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  

  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });

    console.log(response);

    const createdTasks = [...tasks, response.data];

    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    console.log(response);
    setTasks(response.data);
  };

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    
  

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });

    setTasks(updatedTasks);

  };

  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    deleteTaskById,
    editTaskById,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
