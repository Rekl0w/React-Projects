import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {

    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    })

    console.log(response);

    const createdTasks = [
      ...tasks,
      response.data
    ];

    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks")
    setTasks(response.data);
  }
  useEffect(() => {
    fetchTasks();
  },[])
  
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`,{
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    })
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <>
      <div className="App">
        <TaskCreate onCreate={createTask} />
        <h1>Görevler</h1>
        <TaskList
          tasks={tasks}
          onDelete={deleteTaskById}
          onUpdate={editTaskById}
        />
      </div>
    </>
  );
}

export default App;
