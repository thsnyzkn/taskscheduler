import React from "react";

const Task = ({ taskName, taskLength, taskPriorty }) => (
  <li>
    <p>
      You have {taskName} with {taskPriorty} priority ,which will take {taskLength} minutes
    </p>
  </li>
);

export default Task;
