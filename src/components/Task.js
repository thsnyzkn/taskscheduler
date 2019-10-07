import React, { useReducer } from "react";

const Task = () => {
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

  const handleSubmit = event => {
    console.log("Your  priority is: " + userInput.taskPriority);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          name="taskName"
          value={userInput.taskName}
          onChange={handleChange}
        />
      </label>
      <input
        type="number"
        min="0"
        name="taskLength"
        value={userInput.taskLength}
        onChange={handleChange}
      />
      <select
        name="taskPriority"
        value={userInput.taskPriority}
        onChange={handleChange}
      >
        <option value="High">High</option>
        <option value="Mid">Mid</option>
        <option value="Low">Low</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
    /*
     */
  );
};

export default Task;
