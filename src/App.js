import React, { useReducer, useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskModal from "./components/TaskModal";
import TaskList from "./components/TaskList";
function App() {
  const [modal, showModal] = useState(false);
  const [tasks,setTasks] = useState([{taskName:"Wash Dish",taskLength:"120",taskPriority:"High"}])
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      taskName: "",
      taskLength: "",
      taskPriority: "High"
    }
  );
  const handleChange = event => {
    const { name, value } = event.target;
    setUserInput({ [name]: value });
  };
  const handleShowModalClick = () => showModal(true);
  const handleCloseModal = () => showModal(false);
  const handleSubmit = event => {
    event.preventDefault();
    let newTask= userInput
    let newTasks = [...tasks,newTask]
    setTasks(newTasks)
    setUserInput({
      taskName: "",
      taskLength: "",
      taskPriority: "High"
    });
    showModal(false)
  };
  return (
    <div className="App">
    <TaskList tasks={tasks}/>
      <button onClick={handleShowModalClick}>Show Modal</button>
      {modal ? (
        <TaskModal onClose={handleCloseModal}>
          This is our Task Modal
          <TaskCreate
            userInput={userInput}
            taskOptions={["High", "Mid", "Low"]}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </TaskModal>
      ) : null}
    </div>
  );
}

export default App;
