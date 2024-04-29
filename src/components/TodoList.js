import React from 'react'

const TodoList = ({todos, handleComplete}) => {
  return (
    <div>
        <h2>Child Component</h2>
        <ul>
            {todos.map((item, i)=>(
                <li>{item.todo}
                {!item.complete && <button onClick={handleComplete(i)}>Complete</button>}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList