
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {todo: 'Learn React', complete: false},
    {todo: 'Build a React app', complete: false},
    {todo: 'Deploy the React app', complete: false}
  ]);
  const handleComplete = (idx) => {
    const list = todos;
    list[idx].complete = true;
    setTodos([...list]);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  )
}

export default App
