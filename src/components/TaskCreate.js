import React from "react";
import TaskSelect from "./TaskSelect";
import styled from "styled-components";

const Wrapper = styled.div  `
  padding:100px;
`
const TaskCreate = ({ userInput, taskOptions, handleChange, handleSubmit }) => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label>
          Task Name:
          <input
            style={{ display: "block" }}
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
        <TaskSelect
          name="taskPriority"
          value={userInput.taskPriority}
          handleChange={handleChange}
          options={taskOptions}
        />
        <input type="submit" value="Submit" />
      </form>
    </Wrapper>
  );
};

export default TaskCreate;
