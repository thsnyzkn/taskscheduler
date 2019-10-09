import React from "react"
import styled from 'styled-components'

const Option = styled.option`
padding: 50px;
border:none;
`

const TaskOption = ({value})=> (
<Option value={value}>
{value}
</Option>
)

export default TaskOption;


