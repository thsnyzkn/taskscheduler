import React from "react";
import TaskOption from "./TaskOption"
import styled from 'styled-components'
let id=1

const Select = styled.select`
padding: 150px;
border-color:black;
border-radius:100%;
display:block;
`
const TaskSelect = ({ name, value, handleChange, options = [] }) => (
  <Select name={name} value={value} onChange={handleChange}>
    {options.map(option => (
      <TaskOption value={option} key={`${option}-${id++}`}>{option}</TaskOption>
    ))}
  </Select>
);

export default TaskSelect;
